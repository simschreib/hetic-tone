import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { CameraPreview } from 'ionic-native';
import {Http} from '@angular/http';
import {
  NavController,
  LoadingController,
  AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../providers/auth-data';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
import { ResetPasswordPage } from '../reset-password/reset-password';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {


  constructor(public http: Http, public platform: Platform, public nav: NavController, public authData: AuthData, public formBuilder: FormBuilder,
    public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
      console.log(http);
      console.log('youyyou');
      platform.ready().then(() => {


        // StatusBar.styleDefault();
        // Splashscreen.hide();
        //
        // let tapEnabled: any = false;
        // let dragEnabled: any = false;
        // let toBack: any = true;
        // let alpha = 1;
        // let rect: any = {
        //   x: 0,
        //   y: 0,
        //   width: platform.width(),
        //   height: platform.height()
        // };
        //
        // CameraPreview.startCamera(
        //   rect,
        //   'rear',
        //   tapEnabled,
        //   dragEnabled,
        //   toBack,
        //   alpha
        // );
        // var objCanvas = <HTMLCanvasElement> document.getElementById("canvas");
        //     (<any>window).plugin.CanvasCamera.initialize(objCanvas);
        //
        //     var options = {
        //      quality: 75,
        //      destinationType: (<any>window).plugin.CanvasCamera.DestinationType.DATA_URL,
        //      encodingType: (<any>window).plugin.CanvasCamera.EncodingType.JPEG,
        //      width: 100,
        //      height: 100,
        //      allowEdit : true,
        //      correctOrientation: false
        //  };
        //  (<any>window).plugin.CanvasCamera.start(options);
      //   (<any>window).cordova.plugins.CameraServer.startServer({
      //       'www_root' : '/',
      //       'port' : 8080,
      //       'localhost_only' : true,
      //       'json_info': []
      //   }, function( url ){
      //       // if server is up, it will return the url of http://<server ip>:port/
      //       // the ip is the active network connection
      //       // if no wifi or no cell, "127.0.0.1" will be returned.
      //       console.log('CameraServer Started @ ' + url);
      //   }, function( error ){
      //       console.log('CameraServer Start failed: ' + error);
      //   });
      //   (<any>window).cordova.plugins.CameraServer.startCamera(function(){
      //       console.log('Capture Started');
      //   },function( error ){
      //       console.log('CameraServer StartCapture failed: ' + error);
      //   });
      //   var localImg = 'http://localhost:8080/live.jpg';
      //   console.log(Http);
      // this.http.get(localImg);
      (<any>navigator).getUserMedia = (<any>navigator).getUserMedia ||
                               (<any>navigator).webkitGetUserMedia ||
                               (<any>navigator).mozGetUserMedia;

      if ((<any>navigator).getUserMedia) {
         (<any>navigator).getUserMedia({ audio: true, video: { width: 1280, height: 720 } },
            function(stream) {
               var video = document.querySelector('video');
               video.src = window.URL.createObjectURL(stream);
               video.onloadedmetadata = function(e) {
                 video.play();
               };
            },
            function(err) {
               console.log("The following error occurred: " + err.name);
            }
         );
      } else {
         console.log("getUserMedia not supported");
      }

      });
  }

  refresh(){
    window['location'].reload();
  }

  logOut(){
    this.authData.logoutUser().then(() => {
      this.nav.setRoot(LoginPage);
    });
  }

}
