import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'millionEnv'
})
export class MillionEnvPipe implements PipeTransform {
  constructor(private decimalPipe: DecimalPipe) {}

  transform(value: any): any {

    let returnValue;
    if (value >= 100000000) {
      returnValue = this.decimalPipe.transform(value / 1000000, '1.0-0') + ' mill.';
    }
    else if (value >= 10000000) {
      returnValue = this.decimalPipe.transform(value / 1000000, '1.1-1') + ' mill.';
    }
    else if (value >= 1000000) {
      returnValue = this.decimalPipe.transform(value / 1000000, '1.2-2') + ' mill.';
    }
    else {
      returnValue = this.decimalPipe.transform(value, '1.0-0');
    }
    return returnValue;
  }

}
