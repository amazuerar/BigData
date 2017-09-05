import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RssService {

  constructor(private http: Http) { }

  getRssWired() {
    return this.http.get('http://localhost:8888/RSS_WIRED')
      .map(res => res.json().rss.channel.item)
      .toPromise();
  }

  getRssLf() {
    return this.http.get('http://localhost:8888/RSS_LIFEH')
      .map(res => res.json().rss.channel.item)
      .toPromise();
  }

  getRssBbc() {
    return this.http.get('http://localhost:8888/RSS_BBC')
      .map(res => res.json().rss.channel.item)
      .toPromise();
  }

}