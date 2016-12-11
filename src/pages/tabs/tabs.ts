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
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import firebase from 'firebase';

/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})

export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  tab1Root: any = HomePage;
  tab2Root: any = ProfilePage;

  constructor() {

  }
}
