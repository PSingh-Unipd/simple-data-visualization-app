import { Pipe, PipeTransform } from '@angular/core';
import { SumByPropertyName } from '../../functions';
import { IChartPipeProperties, ISingleChartData } from '../../interfaces';

export type SingleChartDataSortOrder = 'ascending' | 'descending';

@Pipe({
  name: 'singleChartDataTransforming'
})
export class SingleChartDataTransformingPipe implements PipeTransform {

  transform<T>(dataArray: Array<T>, properties: IChartPipeProperties, resultLenght?: number, sort?: SingleChartDataSortOrder): ISingleChartData[] {
    if (!Boolean(dataArray) || !Boolean(properties)) {
      return [];
    }

    let map: Map<string, number> = SumByPropertyName(dataArray, properties);


    if (sort === 'ascending') {
      map = new Map([...map.entries()].sort((a, b) => a[1] - b[1]));
    } else if (sort === 'descending') {
      map = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    }

    return Array.from(map, ([key, val]) => ({ name: key, value: val }))
      .slice(0, resultLenght && resultLenght < map.size ? resultLenght : map.size) as ISingleChartData[];
  }
}
