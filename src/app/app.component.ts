import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from "../pages/home/home";
import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { AppointmentPage } from "../pages/appointment/appointment";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = HomePage;
  views: Array<Object>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menu: MenuController) {
    this.initApp();

    this.views = [
      {title: 'Home', component: HomePage},
      {title: 'Appointments', component: AppointmentPage},
      {title: 'About', component: AboutPage},
      {title: 'Contact', component: ContactPage}
    ];    
  }

  initApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goTo(view) {
    this.menu.close();
    this.nav.setRoot(view.component);
  }
}
