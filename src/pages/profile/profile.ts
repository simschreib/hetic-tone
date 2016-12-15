import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { HomePage } from '../home/home';

import Tone from 'tone';
import namer from 'color-namer';
import ColorThief from 'color-thief';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public photo:any;
  public synth:any;
  public canvas:any;
  public colorThief:any;
  public img:string;

  constructor(public nav: NavController, public params:NavParams, public platform: Platform ) {
    platform.ready().then(() => {
      this.setCanvasSize();
      this.synth = new Tone.Synth().toMaster();
      this.colorThief = new ColorThief();
      this.photo = params.get("photo");
      this.getImage();
    });
  }

  setCanvasSize(){
    this.canvas = <HTMLCanvasElement> document.getElementById('canvas');
    this.canvas.width = this.platform.width();
    this.canvas.height = this.platform.height();
    console.log(this.canvas.width);
    return this.canvas;
  }

  getImage(){
    var canvas : any = <HTMLCanvasElement> document.getElementById('canvas');
    var context : CanvasRenderingContext2D = this.canvas.getContext('2d');
    var image = new Image();
    image.src = this.photo;
    image.onload = function() {
      var imgWidth = image.naturalWidth;
      var screenWidth = canvas.width;
      var scaleX = 1;
      if (imgWidth > screenWidth)
          scaleX = screenWidth/imgWidth;
      var imgHeight = image.naturalHeight;
      var screenHeight = canvas.height;
      var scaleY = 1;
      if (imgHeight > screenHeight)
          scaleY = screenHeight/imgHeight;
      var scale = scaleY;
      if(scaleX < scaleY)
          scale = scaleX;
      if(scale < 1){
          imgHeight = imgHeight*scale;
          imgWidth = imgWidth*scale;
      }

      canvas.style.height = imgHeight;
      canvas.style.width = imgWidth;

      context.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight, 0,0, imgWidth, imgHeight);
    }
  }

  pickPixel($event) {
    var canvas = <HTMLCanvasElement> document.getElementById('canvas');
    var ctx : CanvasRenderingContext2D = canvas.getContext('2d');
    var color = document.getElementById('color');

    var x = $event.layerX-25;
    var y = $event.layerY-25;

    var data = ctx.getImageData(x-25, y-25,50,50).data;

    var Clr = this.getDominantColor(data);
    console.log(Clr[0]);
    var hertz = Math.round(120+(Clr[0]+Clr[1]*16+Clr[2]*256)/100);
    console.log("[HERTZ]");
    console.log(hertz);
    var rgb = 'rgb('+Clr[0]+','+Clr[1]+','+Clr[2]+')';
    var colorName = namer(rgb);
    console.log(rgb);
    this.synth.triggerAttackRelease(hertz, "8n");

    console.log("COLOR NAME");
    console.log("name : " + colorName.pantone[0].name)
    color.innerHTML = colorName.pantone[0].name;

    var T = Math.round(hertz/100)-1;

    (<HTMLDivElement> document.getElementById('bar'+(15))).style.height= ((T*10)+5)+'px';

    for(var i  = 1; i < 16; i++){
      (<HTMLDivElement> document.getElementById('bar'+(15+i))).style.height = (T*10-(i*(i%3))+5)+'px';
      (<HTMLDivElement> document.getElementById('bar'+(15-i))).style.height = (T*10-(i*(i%3))+5)+'px';
    }

    window.setTimeout(function(){
      for(var i = 0; i < 31; i++){
        (<HTMLDivElement> document.getElementById('bar'+(i))).style.height = '0px';
      }
    },500);
  }

  getDominantColor(data) {
  // keep track of how many times a color appears in the image
  let colorCount = {};
  let maxCount = 0;
  let dominantColor = "";
  // data is an array of a series of 4 one-byte values representing the rgba values of each pixel


  for (let i = 0; i < data.length; i += 4) {
    // ignore transparent pixels
    if (data[i+3] == 0)
      continue;

    let color = data[i] + "," + data[i+1] + "," + data[i+2];
    // ignore white
    if (color == "255,255,255")
      continue;

    colorCount[color] = colorCount[color] ?  colorCount[color] + 1 : 1;

    // keep track of the color that appears the most times
    if (colorCount[color] > maxCount) {
      maxCount = colorCount[color];
      dominantColor = color;
    }
  }

  let rgb = dominantColor.split(',').map(function(item) {
    return parseInt(item, 10);
  });;


  return rgb;
}

  goBack(){
    this.nav.setRoot(HomePage, {}, { animate: true , direction: 'backward' });
  }

  clickEvents($event){
    this.pickPixel($event);
    this.smoothPointer($event);
  }

  smoothPointer($event){
    console.log('POINTER');
    var pointer =  <HTMLCanvasElement> document.getElementById('pointer');
    var x = $event.layerX-25;
    var y = $event.layerY-25;
    console.log(x);
    pointer.style.left = x +'px';
    console.log(x);
    pointer.style.top = y +'px';
    pointer.classList.toggle('pointer__visible');
    setTimeout(function(){
      pointer.classList.toggle('pointer__visible');
     }, 500);
  }

}
