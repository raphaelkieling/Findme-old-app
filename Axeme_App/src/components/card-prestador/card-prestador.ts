import { AlertController } from 'ionic-angular';
import { Pessoa } from './../../domain/pessoa';
import { Component, Output } from '@angular/core';
import { Input } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';
import { EventEmitter } from '@angular/core';

/**
 * Generated class for the CardPrestadorComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card-prestador',
  templateUrl: 'card-prestador.html'
})
export class CardPrestadorComponent {

  @Input() pessoa: Pessoa;
  @Output() abrir = new EventEmitter();
  
  constructor(public call: CallNumber, public alert: AlertController) {
  }

  ligar() {
    this.call.callNumber(this.pessoa.telefone, true)
      .then()
      .catch(()=>{
        this.alert.create({
          title:'Houve um problema na ligação',
          buttons:['Tudo bem']
        }).present();
      })
  }

  abrirInfo(){
    this.abrir.emit();
  }

  eatWords(words:string){
    return `${words.slice(0,200)}...`;
  }

}
