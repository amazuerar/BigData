import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BackService} from './provider/back.service';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [BackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
