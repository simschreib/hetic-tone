import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Camera } from 'ionic-native';
import {Http} from '@angular/http';
import {
  NavController,
  LoadingController,
  AlertController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public base64Image: string;

  constructor(public http: Http, public platform: Platform, public nav: NavController, public formBuilder: FormBuilder,
    public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
      platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
      });
  }

  takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000,
        saveToPhotoAlbum: true
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.nav.setRoot(ProfilePage, {photo:this.base64Image}, { animate: false, direction: 'forward' });
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
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.nav.push(ProfilePage, {photo:this.base64Image},{ animate: true, direction: 'forward' });
    }, (err) => {
        console.log(err);
  });
  }
}
