import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { RequestOptions } from '@angular/http';
import { Headers } from '@angular/http/src/headers';

/*
  Generated class for the BaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BaseProvider {
  // "http://192.168.1.7:4201" 
  public baseUrlAPI = "https://evening-meadow-61163.herokuapp.com";
  constructor(public http: Http) {
  }
  
  post(url: string, data: object): Observable<any> {
    return this.http.post(`${this.baseUrlAPI}/${url}`, data).map(res => res.json());
  }

  getAll(url): Observable<any[]> {
    return this.http.get(`${this.baseUrlAPI}/${url}`).map(res => res.json());
  }
  

}
