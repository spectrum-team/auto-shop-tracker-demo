//@ts-check
import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { HomePage } from "../home/home";
import { RegisterPage} from "../register/register";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl: NavController, public nav: Nav) {}

  login() {
    this.nav.setRoot(HomePage);
  }

  register() {
    this.nav.push(RegisterPage);
  }
}
