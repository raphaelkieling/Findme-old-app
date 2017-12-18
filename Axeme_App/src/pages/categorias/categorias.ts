import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ConfigPage } from '../config/config';
import { PrestadoresPage } from '../prestadores/prestadores';
import { BaseProvider } from '../../providers/base/base';
import { AmbienteProvider } from '../../providers/ambiente/ambiente';
import { Categoria } from '../../domain/categoria';
import { App } from 'ionic-angular/components/app/app';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  categorias: Categoria[] = []
  constructor(
    public navCtrl: NavController,
    public baseService: BaseProvider,
    public loadingCtrl: LoadingController,
    public ambienteS: AmbienteProvider,
    private app:App
  ) {
  }

  ngOnInit() {
    this.getCategorias();
    this.ambienteS.reloadCategorias.subscribe(()=>{
      this.getCategorias();
    });
  }

  url(imagem) {
    return `${this.baseService.baseUrlAPI}/images/${imagem}`;
  }

  goToPrestadores(categoria){
    this.app.getRootNav().push(PrestadoresPage,{categoria})
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

}
