import { CallNumber } from '@ionic-native/call-number';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { Pessoa } from '../../domain/pessoa';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the PrestadorUnicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prestador-unico',
  templateUrl: 'prestador-unico.html',
})
export class PrestadorUnicoPage {

  pessoa: Pessoa = {
    nome: '',
    cpf: '',
    permissao: '',
    telefone: '',
    rg: ''
  };

  tab = 'prestador';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public callNumber: CallNumber,
    public alertCtrl: AlertController,
    public social: SocialSharing
  ) {
    this.pessoa = this.navParams.get('pessoa');
  }

  abrirActionSheet() {
    let mensagemPadrao = `Esse ${this.pessoa.nome} parece ser demais! Liga pra ele!`;

    this.actionSheetCtrl.create({
      title: 'Compartilhar',
      buttons: [
        {
          text: 'WhatsApp',
          icon: 'logo-whatsapp',
          handler: () => {
            this.social.shareViaWhatsApp(mensagemPadrao, this.pessoa.imagem.url)
              .catch(() => {
                this.alertCtrl.create({
                  title: 'Que chato...',
                  message: 'Algo deu errado na hora de mandar pelo whatsapp!',
                  buttons: ['Tudo bem']
                }).present();
              })
          }
        }, {
          text: 'Facebook',
          icon: 'logo-facebook',
          handler: () => {
            this.social.shareViaFacebook(mensagemPadrao, this.pessoa.imagem.url)
              .catch(() => {
                this.alertCtrl.create({
                  title: 'Ops',
                  message: 'Algo deu errado na hora de mandar pelo facebook!',
                  buttons: ['Tudo bem']
                }).present();
              })
          }
        }, {
          text: 'Cancel',
          icon: 'trash'
        }
      ]
    }).present();
  }

  ligar() {
    this.callNumber.callNumber(this.pessoa.telefone, true)
      .catch(() => {
        this.alertCtrl.create({
          title: 'Que chato...',
          message: 'Algo deu errado na hora de ligar...',
          buttons: ['Tudo bem']
        }).present();
      })
  }
}
