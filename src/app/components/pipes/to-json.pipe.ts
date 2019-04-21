import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toJSON'
})
export class ToJSONPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return JSON.parse(value);
  }

}
