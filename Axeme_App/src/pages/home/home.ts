import { BaseProvider } from './../../providers/base/base';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Categoria } from '../../domain/categoria';
import { InitialPage } from '../initial/initial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categorias: Categoria[] = []
  constructor(
    public navCtrl: NavController,
    public baseService: BaseProvider
  ) {
  }

  ngOnInit() {
    this.getCategorias();
  }

  url(imagem) {
    return `${this.baseService.baseUrlAPI}/images/${imagem}`;
  }

  getCategorias() {
    this.categorias = [];
    this.baseService.getAll('categoriaservico')
      .subscribe(categorias => {
        this.categorias = categorias
      }, err => {
        console.log(err);
      })
  }

  logout(){
    localStorage.removeItem('token')
    this.navCtrl.push(InitialPage);
  }
}
