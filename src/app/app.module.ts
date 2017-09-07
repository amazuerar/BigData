import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BackService} from './provider/back.service';
import { RssService} from './provider/rss.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RegexTitlePipe } from './pipe/regex-title.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    RegexTitlePipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule      
  ],
  providers: [BackService, RssService, RegexTitlePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
