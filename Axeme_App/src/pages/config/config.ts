import { AmbienteProvider } from './../../providers/ambiente/ambiente';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InitialPage } from '../initial/initial';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ambienteS: AmbienteProvider,
    public alert: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }

  logout() {
    let prompt = this.alert.create({
      title: 'Sair',
      message: "Tem certeza que quer sair?",
      buttons: [
        {
          text: 'Não mesmo',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Quero sair',
          handler: data => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            this.navCtrl.setRoot(InitialPage);
          }
        }
      ]
    }).present();
  }

}
