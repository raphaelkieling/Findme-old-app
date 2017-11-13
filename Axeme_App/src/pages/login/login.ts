import { HomePage } from './../home/home';
import { BaseProvider } from './../../providers/base/base';
import { FormGroup } from '@angular/forms/src/model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  salvarInfo: boolean = (localStorage.getItem('email-login')) ? true : false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public baseService: BaseProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
    this.buildaFormulario();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  buildaFormulario() {
    let email = localStorage.getItem('email-login') || '';
    this.loginForm = this.formBuilder.group({
      email: [email],
      senha: [],
      salvarInfo: []
    })
  }

  entrar() {
    let loading = this.loadingCtrl.create({
      content: 'Carregando...'
    })

    loading.present();

    if (this.salvarInfo) {
      localStorage.setItem('email-login', this.loginForm.get('email').value);
    }

    this.baseService.post('usuario/authenticate', this.loginForm.value)
      .subscribe(res => {
        console.log('[login]', res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user.pessoa));

        this.navCtrl.push(HomePage);
        loading.dismiss()
      }, err => {
        let alert = this.alertCtrl.create({
          title: 'Usuário e senha não conferem',
          message: 'Não encontrei nenhuma relação entre o e-mail e a senha... Não quer cadastrar um?',
          buttons: [
            {
              text: 'Quero!',
              handler: () => {
                this.navCtrl.push(RegisterPage);
              }
            },
            {
              text: 'Melhor não',
              handler: () => {

              }
            }
          ]

        }).present();

        loading.dismiss()
      })
  }

  queroMeCadastrar() {
    this.navCtrl.push(RegisterPage);
  }
}
