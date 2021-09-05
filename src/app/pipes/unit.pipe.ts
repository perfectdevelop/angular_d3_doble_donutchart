import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unit'
})
export class UnitPipe implements PipeTransform {

  constructor(private decimalPipe: DecimalPipe) {}
  
  transform(value: any, unit: string): any {
    let returnValue;
    if (unit == "GWh"){
      returnValue = value / 1000000;  
    } else if(unit == "MWh"){
      returnValue = value / 1000;
    } else {
      returnValue = value;  
    }
    return returnValue;
  }

}
