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
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { DataTableModule } from 'ng2-flex-table';
import { FilterPipe, OrderPipe } from './pipe/filter-table.pipe';

const appRoutes: Routes = [
  { path: 'Universidad', component: ProfesoresComponent },
  { path: 'Rss', component: RssComponent },
  { path: '**', component: ProfesoresComponent }
];

@NgModule({
  declarations: [
    FilterPipe,
    OrderPipe,
    AppComponent,
    RegexTitlePipe,
    RegexCategoryPipe,
    ProfesoresComponent,
    RssComponent
  ],
  imports: [
    DataTableModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, BackService, RssService, FilterPipe, OrderPipe, RegexTitlePipe, RegexCategoryPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
