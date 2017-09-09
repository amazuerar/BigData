import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BackService {

  //address = "172.24.100.104";
  address = "localhost";
  port = "8080";

  constructor(private http: Http) { }

 

  getNoticiasUniandes() {
    return this.http.get('http://' + this.address + ':' + this.port + '/NOTICIAS')
      .map(res => res.json())
      .toPromise()
  }

   getPersonasUniandes() {
    return this.http.get('http://' + this.address + ':' + this.port + '/PERSONAS')
      .map(res => res.json())
      .toPromise()
  }

}
