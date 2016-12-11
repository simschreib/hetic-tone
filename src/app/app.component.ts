import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { AuthData } from '../providers/auth-data';
import {
  NavController,
  LoadingController,
  AlertController } from 'ionic-angular';

import firebase from 'firebase';

@Component({
  template: `<ion-nav #nav [root]="rootPage"></ion-nav>`
})
export class MyApp {

  @ViewChild('nav') nav
  public rootPage: any;
  constructor(public platform: Platform) {

    firebase.initializeApp({
      apiKey: "AIzaSyAISBNTO-6zC0pZYQxJOHSjTodyYuP1iEA",
      authDomain: "hetic-colors.firebaseapp.com",
      databaseURL: "https://hetic-colors.firebaseio.com",
      storageBucket: "hetic-colors.appspot.com",
      messagingSenderId: "490227219916"
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
    //
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        console.log("euh go là");
        this.nav.push(LoginPage);
      }
    });

  }
}
