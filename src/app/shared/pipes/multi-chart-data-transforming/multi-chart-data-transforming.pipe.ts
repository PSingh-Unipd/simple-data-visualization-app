import { Pipe, PipeTransform } from '@angular/core';
import { SumByPropertyName } from '../../functions';
import { IChartPipeProperties, IMultiChartData } from '../../interfaces';

@Pipe({
  name: 'multiChartDataTransforming'
})
export class MultiChartDataTransformingPipe implements PipeTransform {

  transform<T>(dataArray: Array<T>, properties: IChartPipeProperties[]): IMultiChartData[] {
    if (!Boolean(dataArray) || !Boolean(properties)) {
      return [];
    }

    // Need to create just one series list
    if (properties.length === 1) {
      let map: Map<string, number> = SumByPropertyName(dataArray, properties[0]);

      return [{ name: properties[0].label ? properties[0].label : properties[0].keyProperty, series: Array.from(map, ([key, val]) => ({ name: key, value: val })) }];
    } else {
      return [];
      // TODO : Add logic to handle multi series data!
    }
    return [];
  }
}



