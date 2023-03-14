import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'creationDate'
})
export class CreationDatePipe implements PipeTransform {
  constructor(public datepipe: DatePipe){ }
  transform(value: any){
    return this.datepipe.transform(value,"dd.MM.yyyy");
  }

}
