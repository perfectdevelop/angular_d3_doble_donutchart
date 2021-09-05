import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import * as d3 from 'd3';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {
  constructor(private decimalPipe: DecimalPipe) {}
  transform(value: any): any {
    let returnValue;
    if (value >= 1000000) {
      returnValue =  this.transformFormat(value/1000000) + ' mill.';
    }
    else{
      returnValue =  this.transformFormat(value);
    }
    return `$${returnValue}`;
  }

  transformFormat(value: any): any {
    let valueFormat;
    if(value < 1000){
      value = this.trunc(value,2);
      let formatComma = d3.format(",.2f");
      valueFormat = formatComma(value);
    }else{
      let formatComma = d3.format(",")	;
      let valueTrunc = Math.trunc(value);
      valueFormat = formatComma(valueTrunc);
    }
    return valueFormat;
  }

  trunc(x, posiciones = 0) {
    var s = x.toString()
    var l = s.length
    var decimalLength = s.indexOf('.') + 1
    var numStr = s.substr(0, decimalLength + posiciones)
    return Number(numStr)
  }

}
