import { AmbienteProvider } from './../ambiente/ambiente';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the BaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BaseProvider {
  public baseUrlAPI = "https://evening-meadow-61163.herokuapp.com";

  constructor(public http: HttpClient, public ambienteS: AmbienteProvider) {
  }

  post(url: string, data: object): Observable<any> {
    return this.http.post(`${this.baseUrlAPI}/${url}`, data);
  }

  getAll(url): Observable<any> {
    return this.http.get(`${this.baseUrlAPI}/${url}`);
  }


}
