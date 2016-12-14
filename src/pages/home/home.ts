import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Camera } from 'ionic-native';
import {
  NavController,
  LoadingController,
  AlertController, NavParams } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { AuthData } from '../../providers/auth-data';
import { LoginPage } from '../login/login';
import { ProfilePage } from '../profile/profile';
import { File } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public base64Image: string;

  constructor(public platform: Platform, public nav: NavController, public authData: AuthData, public formBuilder: FormBuilder,
    public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
      platform.ready().then(() => {

      StatusBar.styleDefault();
      Splashscreen.hide();

      });
  }

  logOut(){
    this.authData.logoutUser().then(() => {
      this.nav.setRoot(LoginPage);
    });
  }

  takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
  });
  }

  uploadPicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
  });
  }
}
