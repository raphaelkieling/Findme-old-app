import { PrestadoresPage } from './../prestadores/prestadores';
import { BaseProvider } from './../../providers/base/base';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Categoria } from '../../domain/categoria';
import { InitialPage } from '../initial/initial';
import { LoadingController } from 'ionic-angular';
import { AmbienteProvider } from '../../providers/ambiente/ambiente';
import { ConfigPage } from '../config/config';
import { CategoriasPage } from '../categorias/categorias';
import { FavoritosPage } from '../favoritos/favoritos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1 = CategoriasPage
  tab2 = FavoritosPage

  constructor(
    public navCtrl: NavController,
    public baseService: BaseProvider,
    public loadingCtrl: LoadingController,
    public ambienteS: AmbienteProvider
  ) {
  }

  ngOnInit() {
  }

  goConfig() {
    this.navCtrl.push(ConfigPage);
  }

  reloadCategorias(){
    this.ambienteS.reloadCategorias.emit();
  }
}
