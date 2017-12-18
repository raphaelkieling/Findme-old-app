import { AmbienteProvider } from './ambiente/ambiente';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(public ambiente: AmbienteProvider) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        if (this.ambiente.token()) {
            req = req.clone({
                headers: new HttpHeaders({
                    'Authorization': this.ambiente.token()
                })
            });
        }

        return next.handle(req);
    }
}