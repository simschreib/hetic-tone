import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { CameraPreview } from 'ionic-native';
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

  constructor(public platform: Platform, public nav: NavController, public authData: AuthData, public formBuilder: FormBuilder,
    public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
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
        var objCanvas = <HTMLCanvasElement> document.getElementById("canvas");
            (<any>window).plugin.CanvasCamera.initialize(objCanvas);

            var options = {
             quality: 75,
             destinationType: (<any>window).plugin.CanvasCamera.DestinationType.DATA_URL,
             encodingType: (<any>window).plugin.CanvasCamera.EncodingType.JPEG,
             width: 900,
             height: 900
         };
         (<any>window).plugin.CanvasCamera.start(options);


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
