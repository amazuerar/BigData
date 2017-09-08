import { Component, OnInit } from '@angular/core';
import { BackService } from '../provider/back.service';


@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  profesores = [];

  constructor( private backservice: BackService) { }

  ngOnInit() {
    this.backservice.getUsers().then(prof => this.profesores = prof);
  }

}
