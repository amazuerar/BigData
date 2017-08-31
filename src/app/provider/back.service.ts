import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BackService {

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get('/assets/profesores.json')
      .map(res => res.json())
      .toPromise();
  }

}
