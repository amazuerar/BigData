import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'regexTitle'
})
export class RegexTitlePipe implements PipeTransform {

  transform(input: any, field:any, regex: any): any {
   
    let patt = new RegExp(regex);
    console.log(field);
    let out = [];
    for (let i = 0; i < input.length; i++) {
      if (patt.test(input[i][field])) {
        out.push(input[i]);
      }
    }
    return out;
  }

}
