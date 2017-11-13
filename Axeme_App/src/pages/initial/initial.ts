import { LoginPage } from './../login/login';
import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AmbienteProvider } from '../../providers/ambiente/ambiente';

/**
 * Generated class for the InitialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-initial',
  templateUrl: 'initial.html',
})
export class InitialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }


  goToRegister() {
    this.navCtrl.push(RegisterPage);
  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }

}
