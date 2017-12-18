import { BaseProvider } from './../base/base';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the PrestadorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PrestadorProvider {

  constructor(public baseS: BaseProvider) {
    console.log('Hello PrestadorProvider Provider');
  }

  

}
