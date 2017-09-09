import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BackService } from '../provider/back.service';



@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.sass']
})
export class ProfesoresComponent implements OnInit {
  @Output() outEvent: EventEmitter<{ type: string, data: string | Array<any> }>;

  headerData: string[];
  isEditing: EventTarget;
  reverse: true;
  order: string;
  editedValue: string;
  filter: Object = {};
  profesores = [];
  data;

  constructor(private backservice: BackService) {
    this.outEvent = new EventEmitter<{ type: string, data: string | Array<any> }>();
   // this.data = TableData;
  }

  ngOnInit() {

    this.backservice.getPersonasUniandes().then((prof) => {
      this.data = prof;
      this.headerData = this.getUniqueKeys(this.data);
      this.order = this.headerData[0];
      this.outEvent.emit({ type: 'init', data: 'none' });
    });
  }

  getUniqueKeys(obj: any): string[] {
    return obj.reduce((acc, curr) => {
      Object.keys(curr).forEach(key => {
        if (acc.indexOf(key) === -1) {
          acc.push(key);
        }
      });
      return acc;
    }, []);
  }

  tableEvents(value: Event): void {
    if (value) {
      console.log(value);
    }
  }

  editValue(e: MouseEvent, obj: any, property: string): void {
    if (!this.isEditing || this.isEditing === e.target) {
      if (this.isEditing && this.editedValue !== e.target['value']) {
        obj[property] = this.isEditing['value'];
        this.outEvent.emit({ type: 'valueChanged', data: obj });
      }
      e.target['disabled'] = !e.target['disabled'];
      this.editedValue = !e.target['disabled'] ? e.target['value'] : undefined;
      this.isEditing = !e.target['disabled'] ? e.target : undefined;
    }
  }

  deleteFilter(item: any): void {
    delete this.filter[item];
  }

}
