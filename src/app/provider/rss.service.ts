import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RssService {

  //address = "172.24.100.104";
  address = "localhost";
  port = "8080";
  
  constructor(private http: Http) { }

  getRssWired() {
    return this.http.get('http://'+this.address+':'+this.port+'/RSS_WIRED')
      .map(res => res.json().rss.channel.item)
      .toPromise()
  }

  getRssLf() {
    return this.http.get('http://'+this.address+':'+this.port+'/RSS_LIFEH')
      .map(res => res.json().rss.channel.item)
      .toPromise()
  }

  getRssBbc() {
    return this.http.get('http://'+this.address+':'+this.port+'/RSS_BBC')
      .map(res => res.json().rss.channel.item)
      .toPromise()
  }

  getRssWiredXQFilter(title:any, description:any, category:any) {
    return this.http.get('http://'+this.address+':'+this.port+'/RSS_WIRED_XQ/'+title+"/"+description+"/"+category)
      .map(res => res.json().rss.channel.item)
      .toPromise()
  }

  getRssLfXQFilter(title:any, description:any, category:any) {
    return this.http.get('http://'+this.address+':'+this.port+'/RSS_LIFEH_XQ/'+title+"/"+description+"/"+category)
      .map(res => res.json().rss.channel.item)
      .toPromise()
  }

  getRssBbcXQFilter(title:any, description:any, category:any) {
    return this.http.get('http://'+this.address+':'+this.port+'/RSS_BBC_XQ/'+title+"/"+description+"/"+category)
      .map(res => res.json().rss.channel.item)
      .toPromise()
  }

  

}