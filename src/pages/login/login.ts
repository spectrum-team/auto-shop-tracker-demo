//@ts-check
import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { HomePage } from "../home/home";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController, public nav: Nav) {}

  login() {
    this.nav.setRoot(HomePage);
  }
}
