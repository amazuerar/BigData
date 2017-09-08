import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BackService} from './provider/back.service';
import { RssService} from './provider/rss.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RegexTitlePipe } from './pipe/regex-title.pipe';
import { RegexCategoryPipe } from './pipe/regex-category.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    RegexTitlePipe,
    RegexCategoryPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule      
  ],
  providers: [BackService, RssService, RegexTitlePipe, RegexCategoryPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
