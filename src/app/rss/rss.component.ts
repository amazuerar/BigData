import { Component, OnInit } from '@angular/core';
import { BackService } from '../provider/back.service';
import { RssService } from '../provider/rss.service';
import { RegexTitlePipe } from '../pipe/regex-title.pipe';
import { RegexCategoryPipe } from '../pipe/regex-category.pipe';

@Component({
  selector: 'app-rss',
  templateUrl: './rss.component.html',
  styleUrls: ['./rss.component.css']
})
export class RssComponent implements OnInit {

  profesores = [];

  rssWired = [];
  rssWiredLen;

  rssLifeH = [];
  rssLifeHLen;

  rssBbc = [];
  rssBbcLen;



  rssWiredRegex = [];
  rssWiredRegexLen;

  rssLifeHRegex = [];
  rssLifeHRegexLen;

  rssBbcRegex = [];
  rssBbcRegexLen;



  rssWiredXQ = [];
  rssWiredXQLen;

  rssLifeHXQ = [];
  rssLifeHXQLen;

  rssBbcXQ = [];
  rssBbcXQLen;

  title = "";
  description = "";
  category = "";
  constructor(private pipeRegexCat: RegexCategoryPipe, private pipeRegex: RegexTitlePipe, private backservice: BackService, private rss: RssService) { }

  ngOnInit() {
    //this.backservice.getUsers().then(prof => this.profesores = prof);
    this.rss.getRssWired().then(rss => { this.rssWired = rss; this.rssWiredLen = this.rssWired.length });
    this.rss.getRssWired().then(rss => { this.rssWiredRegex = rss; this.rssWiredRegexLen = this.rssWiredRegex.length });
    this.rss.getRssWired().then(rss => { this.rssWiredXQ = rss; this.rssWiredXQLen = this.rssWiredXQ.length });

    this.rss.getRssBbc().then(rss => { this.rssBbc = rss; this.rssBbcLen = this.rssBbc.length });
    this.rss.getRssBbc().then(rss => { this.rssBbcRegex = rss; this.rssBbcRegexLen = this.rssBbcRegex.length });
    this.rss.getRssBbc().then(rss => { this.rssBbcXQ = rss; this.rssBbcXQLen = this.rssBbcXQ.length });

    this.rss.getRssLf().then(rss => { this.rssLifeH = rss; this.rssLifeHLen = this.rssLifeH.length });
    this.rss.getRssLf().then(rss => { this.rssLifeHRegex = rss; this.rssLifeHRegexLen = this.rssLifeHRegex.length });
    this.rss.getRssLf().then(rss => { this.rssLifeHXQ = rss; this.rssLifeHXQLen = this.rssLifeHXQ.length });


  }

  filter() {

    let wired = this.rssWired;
    let lifeh = this.rssLifeH;
    let bbc = this.rssBbc;

    if (this.title.trim() === "" && this.description.trim() === "" && this.category.trim() === "") {
      alert("Debe escribir algún parámetro de búsqueda");
      this.clean();
    }
    else {

      // REGEX
      this.rssWiredRegex = this.pipeRegexCat.transform(this.pipeRegex.transform(this.pipeRegex.transform(wired, "description", this.description.toLowerCase()), "title", this.title.toLowerCase()), "category", this.category);
      this.rssLifeHRegex = this.pipeRegexCat.transform(this.pipeRegex.transform(this.pipeRegex.transform(lifeh, "description", this.description.toLowerCase()), "title", this.title.toLowerCase()), "category", this.category);
      this.rssBbcRegex = this.pipeRegexCat.transform(this.pipeRegex.transform(this.pipeRegex.transform(bbc, "description", this.description.toLowerCase()), "title", this.title.toLowerCase()), "category", this.category);

      this.rssWiredRegexLen = this.rssWiredRegex.length
      this.rssLifeHRegexLen = this.rssLifeHRegex.length
      this.rssBbcRegexLen = this.rssBbcRegex.length

      // XQuery (Elementree)
      this.rss.getRssWiredXQFilter(this.title, this.description, this.category)
        .then(newRss => {
          if (newRss.length === undefined) {
            this.rssWiredXQ = [];
            this.rssWiredXQ.push(newRss);
          }
          else {
            this.rssWiredXQ = newRss;
          }
          this.rssWiredXQLen = this.rssWiredXQ.length;

        })
        .then(undefined, (error) => { this.rssWiredXQ.length = 0; this.rssWiredXQLen = this.rssWiredXQ.length; });

      this.rss.getRssLfXQFilter(this.title, this.description, this.category)
        .then(newRss => {
          if (newRss.length === undefined) {
            this.rssLifeHXQ = [];
            this.rssLifeHXQ.push(newRss);
          }
          else {
            this.rssLifeHXQ = newRss;
          }
          this.rssLifeHXQLen = this.rssLifeHXQ.length;
        })
        .then(undefined, (error) => { this.rssLifeHXQ.length = 0; this.rssLifeHXQLen = this.rssLifeHXQ.length; });

      this.rss.getRssBbcXQFilter(this.title, this.description, this.category)
        .then(newRss => {
          if (newRss.length === undefined) {
            this.rssBbcXQ = [];
            this.rssBbcXQ.push(newRss);
          }
          else {
            this.rssBbcXQ = newRss;
          }
          this.rssBbcXQLen = this.rssBbcXQ.length;

        })
        .then(undefined, (error) => { this.rssBbcXQ.length = 0; this.rssBbcXQLen = this.rssBbcXQ.length });




    }


  }



  clean() {
    this.title = "";
    this.description = "";
    this.category = "";
    this.ngOnInit();

  }


}
