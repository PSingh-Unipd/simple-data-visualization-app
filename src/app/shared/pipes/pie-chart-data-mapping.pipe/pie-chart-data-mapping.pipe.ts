import { Pipe, PipeTransform } from '@angular/core';
import { MapToArray, SumByPropertyName, TopNValues } from '../../functions';
import { IpieChartData, PieChartDataType } from '../../interfaces';

@Pipe({
  name: 'pieChartDataMapping'
})
export class PieChartDataMappingPipe implements PipeTransform {

  transform<T>(dataArray: Array<T>, keys: { byProperty: string, valueProperty: string }, type: PieChartDataType, resultLenght?: number): IpieChartData[] {

    if (dataArray.length === 0) {
      return [];
    }

    if (type === PieChartDataType.sum) {
      let result: Map<string, number> = SumByPropertyName(dataArray, keys);

      if (resultLenght) {
        result = TopNValues(result, resultLenght);
      }
      return Array.from(result, ([key, val]) => ({ name: key, value: val }));
    }
    return [];
  }
}
