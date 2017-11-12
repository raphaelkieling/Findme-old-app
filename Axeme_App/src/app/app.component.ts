import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InitialPage } from '../pages/initial/initial';
import { AmbienteProvider } from '../providers/ambiente/ambiente';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = (this.ambienteProvider.isAutenticado) ? HomePage : InitialPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    public ambienteProvider: AmbienteProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

