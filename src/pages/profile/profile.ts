import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  public photo:any;

  constructor(public navCtrl: NavController, public params:NavParams) {
    this.photo = params.get("photo");
  }
  ionViewDidLoad() {
    console.log('Hello ProfilePage Page');
  }

}
