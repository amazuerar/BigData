import { Component } from '@angular/core';
import { BackService } from './provider/back.service';
import { RssService } from './provider/rss.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Profesores';
  profesores: any[] = [];
  
  rssWired: any[] = [];
  rssLifeH: any[] = [];
  rssBbc: any[] = [];

  rssWiredRegex: any[] = [];
  rssLifeHRegex: any[] = [];
  rssBbcRegex: any[] = [];


  constructor(private backservice: BackService, private rss: RssService){}


  ngOnInit()
  {
    //this.backservice.getUsers().then(prof => this.profesores = prof);
    this.rss.getRssWired().then(rss => this.rssWired = rss);
    this.rss.getRssBbc().then(rss => this.rssBbc = rss);
    this.rss.getRssLf().then(rss => this.rssLifeH = rss);
    
  }

}
