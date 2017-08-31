import { Component } from '@angular/core';
import { BackService } from './provider/back.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Profesores';
  profesores: any[] = [];

  constructor(private backservice: BackService){}


  ngOnInit()
  {
    this.backservice.getUsers().then(prof => this.profesores = prof);
  }

}
