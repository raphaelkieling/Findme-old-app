import { PrestadoresPage } from './../prestadores/prestadores';
import { BaseProvider } from './../../providers/base/base';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Categoria } from '../../domain/categoria';
import { InitialPage } from '../initial/initial';
import { LoadingController } from 'ionic-angular';
import { AmbienteProvider } from '../../providers/ambiente/ambiente';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categorias: Categoria[] = []
  constructor(
    public navCtrl: NavController,
    public baseService: BaseProvider,
    public loadingCtrl: LoadingController,
    public ambienteS: AmbienteProvider
  ) {
  }

  ngOnInit() {
    this.getCategorias();
  }

  url(imagem) {
    return `${this.baseService.baseUrlAPI}/images/${imagem}`;
  }

  goToPrestadores(categoria){
    this.navCtrl.push(PrestadoresPage,{
      categoria
    });
  }

  getCategorias() {
    let loader = this.loadingCtrl.create({
      content:'Carregando Categorias...'
    });

    loader.present();


    this.categorias = [];
    this.baseService.getAll('categoriaservico')
      .subscribe(categorias => {
        this.categorias = categorias
        loader.dismiss();
      }, err => {
        console.log(err);
        loader.dismiss();
      })
  }

  logout() {
    localStorage.removeItem('token')
    this.navCtrl.push(InitialPage);
  }
}
