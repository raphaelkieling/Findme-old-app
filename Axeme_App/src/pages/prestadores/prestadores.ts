import { PrestadorUnicoPage } from './../prestador-unico/prestador-unico';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BaseProvider } from '../../providers/base/base';

/**
 * Generated class for the PrestadoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prestadores',
  templateUrl: 'prestadores.html',
})
export class PrestadoresPage {

  categoria = {};
  prestadores = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public baseS: BaseProvider
  ) {
    this.categoria = this.navParams.get('categoria');
  }

  ionViewDidLoad() {
    this.baseS.getAll(`prestador/categoria/${this.categoria['id']}`)
      .subscribe(prestadores => {
        console.log(prestadores);
        this.prestadores = prestadores;
      })
  }

  abrirPrestador(pessoa){
    this.navCtrl.push(PrestadorUnicoPage,{pessoa})
  }

}
