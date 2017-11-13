import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { JwtHelper } from 'angular2-jwt';
/*
  Generated class for the AmbienteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AmbienteProvider {

  isAutenticado() {
    if (this.token()) {
      if (this.decodificaToken) {
        return true;
      }
    }
    return false;
  }

  token(): string {
    return localStorage.getItem('token');
  }

  private decodificaToken() {
    let jwt = new JwtHelper();
    return jwt.decodeToken(this.token());
  }

  get User() {
    return this.decodificaToken().user;
  }
}
