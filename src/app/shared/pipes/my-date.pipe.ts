import { Pipe, PipeTransform } from '@angular/core';
import { getNumberOfCurrencyDigits } from '@angular/common';

@Pipe({
  name: 'myDate'
})
export class MyDatePipe implements PipeTransform {

  transform(value: any): null | string {
    if (!value) {
      return null;
    }
    const date = new Date(value);
    return date.toLocaleString('pl-PL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    // return null;
  }

}
