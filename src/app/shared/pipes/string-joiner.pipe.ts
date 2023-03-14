import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringJoiner'
})
export class StringJoinerPipe implements PipeTransform {
  
  transform(value: string[], seperator : string) {
    return value.join(seperator);
  }

}
