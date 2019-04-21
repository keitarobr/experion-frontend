import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   
    if (!Array.isArray(value)) {
      return value; // if not array return original - can also throw error
    }
 
    return value.join(args);
  };
}
