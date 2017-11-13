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
  // "http://192.168.1.7:4201" 
  public baseUrlAPI = "http://192.168.101.29:1337";

  constructor(public http: HttpClient, public ambienteS: AmbienteProvider) {
  }

  post(url: string, data: object): Observable<any> {
    return this.http.post(`${this.baseUrlAPI}/${url}`, data);
  }

  getAll(url): Observable<any> {
    return this.http.get(`${this.baseUrlAPI}/${url}`);
  }


}
