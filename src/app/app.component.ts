import { Component } from '@angular/core';
import { BackService } from './provider/back.service';
import { RssService } from './provider/rss.service';
import { RegexTitlePipe } from './pipe/regex-title.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  profesores: any[] = [];

  rssWired: any[] = [];
  rssLifeH: any[] = [];
  rssBbc: any[] = [];

  rssWiredRegex : any[] = [];
  rssLifeHRegex : any[] = [];
  rssBbcRegex : any[] = [];

  rssWiredXQ: any[] = [];
  rssLifeHXQ: any[] = [];
  rssBbcXQ: any[] = [];

  title = "";
  description = "";
  category = "";

  constructor(private pipeRegex:RegexTitlePipe, private backservice: BackService, private rss: RssService) {

  }


  ngOnInit() {
    //this.backservice.getUsers().then(prof => this.profesores = prof);
    this.rss.getRssWired().then(rss => {this.rssWired = rss; this.rssWiredRegex = rss; this.rssWiredXQ = rss});
    this.rss.getRssBbc().then(rss => {this.rssBbc = rss; this.rssBbcRegex = rss; this.rssBbcXQ = rss});
    this.rss.getRssLf().then(rss => {this.rssLifeH = rss; this.rssLifeHRegex = rss; this.rssLifeHXQ = rss});
  }

  filter() {
    let wired = this.rssWired;
    let lifeh = this.rssLifeH;
    let bbc = this.rssBbc;

    // REGEX
    this.rssWiredRegex = this.pipeRegex.transform(this.pipeRegex.transform(wired, "description",this.description.toLowerCase( )), "title", this.title.toLowerCase( ));
    this.rssLifeHRegex = this.pipeRegex.transform(this.pipeRegex.transform(lifeh, "description",this.description.toLowerCase( )), "title", this.title.toLowerCase( ));
    this.rssBbcRegex = this.pipeRegex.transform(this.pipeRegex.transform(bbc, "description",this.description.toLowerCase( )), "title", this.title.toLowerCase( ));
    //console.log(this.rssWiredRegex);

    // XQuery (Elementree)
    this.rss.getRssWiredXQFilter(this.title, this.description, "").then(newRss =>  {this.rssWiredXQ = newRss; console.log(this.rssWiredXQ)});
   // this.rss.getRssLfXQFilter(this.title, this.description, "").then(newRss => this.rssLifeHXQ = newRss);
    //this.rss.getRssBbcXQFilter(this.title, this.description, "").then(newRss => this.rssBbcXQ = newRss);
  }

  clean() {
    this.title = "";
    this.description = "";
    this.category = "";
    this.ngOnInit();

  }

}
