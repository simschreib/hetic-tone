import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { HomePage } from '../home/home';

import Tone from 'tone';
import namer from 'color-namer';
import ColorThief from 'color-thief'

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public photo:any;
  public synth:any;
  public canvas:any;
  public colorThief:any;

  constructor(public nav: NavController, public params:NavParams, public platform: Platform) {
    platform.ready().then(() => {
      this.setCanvasSize();
      this.synth = new Tone.Synth().toMaster();
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

    var x = $event.layerX;
    var y = $event.layerY;

    var pixel = ctx.getImageData(x, y,1,1);
    var data = pixel.data;

    var hertz = Math.round(120+(data[0]+data[1]*16+data[2]*256)/100);
    this.synth.triggerAttackRelease(hertz, "8n");
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
    var x = $event.layerX;
    var y = $event.layerY;
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
