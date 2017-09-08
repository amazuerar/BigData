import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BackService } from './provider/back.service';
import { RssService } from './provider/rss.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RegexTitlePipe } from './pipe/regex-title.pipe';
import { RegexCategoryPipe } from './pipe/regex-category.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfesoresComponent } from './profesores/profesores.component';
import { RssComponent } from './rss/rss.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'Universidad', component: ProfesoresComponent },
  { path: 'Rss', component: RssComponent },
  { path: '**', component: ProfesoresComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegexTitlePipe,
    RegexCategoryPipe,
    ProfesoresComponent,
    RssComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [BackService, RssService, RegexTitlePipe, RegexCategoryPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
