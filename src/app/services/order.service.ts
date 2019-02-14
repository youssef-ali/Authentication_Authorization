import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthHttp, AuthConfig, AUTH_PROVIDERS, provideAuth  } from 'angular2-jwt';

@Injectable()
export class OrderService {

  constructor(private authHttp: AuthHttp, private http : Http) {
  }

  getOrders() { 
    // let headers = new Headers();
    // let token = localStorage.getItem('token');
    // headers.append('Authorization', 'Bearer ' + token);

    // let options = new RequestOptions({headers: headers});

    // return this.http.get('/api/orders', options)
    //   .map(response => response.json());

    // using jwt AuthHttp - notice that need add 2 providers in app.module.ts
    return this.authHttp.get('/api/orders')
      .map(response => response.json());
  }
}
