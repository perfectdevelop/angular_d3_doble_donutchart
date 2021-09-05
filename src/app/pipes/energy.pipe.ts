import { Pipe, PipeTransform } from '@angular/core';

import * as d3 from 'd3';

@Pipe({
  name: 'energy'
})
export class EnergyPipe implements PipeTransform {

  constructor() {}

  transform(value: any, unit?: boolean): any {
    let returnValue: any;
    if (value >= 100000000) {
      returnValue = this.transformFormat(value / 1000000);
      if (unit == true){
        returnValue += ' GWh';
      }
    } else if (value >= 100000){
      returnValue = this.transformFormat(value / 1000);
      if (unit == true){
        returnValue += ' MWh';
      }
    } else {
      returnValue = this.transformFormat(value);
      if (unit == true){
        returnValue += ' kWh';
      }
    }
    return returnValue;
  }

  // Función que da formato a los datos mostrados en las gráficas y tarjetas de información,
  // con datos menores de 1000 se muestran 2 decimales y para mayores a 1000 se trunca el valor.
  transformFormat(value: any): any {
    let valueFormat: any;
    if (value < 1000) {
      valueFormat = +value.toFixed(2);
    }else{
      const formatComma = d3.format(',')	;
      const valueTrunc = Math.trunc(value);
      valueFormat = formatComma(valueTrunc);
    }
    return valueFormat;
  }

  getNewUnitChart(getMax: any): string{
    const max = Math.max(...getMax);
    let r = 'kWh';
    if (max >= 100000000) {
      r = 'GWh';
    } else if (max >= 100000){
      r = 'MWh';
    }
    return r;
  }

}
