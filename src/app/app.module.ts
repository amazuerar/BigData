import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BackService} from './provider/back.service';
import { RssService} from './provider/rss.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RegexTitlePipe } from './pipe/regex-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegexTitlePipe,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [BackService, RssService],
  bootstrap: [AppComponent]
})
export class AppModule { }
