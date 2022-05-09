import { Pipe, PipeTransform } from '@angular/core';
import { SumByPropertyName } from '../../functions';
import { IpieChartData } from '../../interfaces';

export type SingleChartDataSortOrder = 'ascending' | 'descending';

@Pipe({
  name: 'singleChartDataTransforming'
})
export class SingleChartDataTransformingPipe implements PipeTransform {

  transform<T>(dataArray: Array<T>, keys: { byProperty: string, valueProperty: string }, resultLenght?: number, sort?: SingleChartDataSortOrder): IpieChartData[] {
    if (dataArray.length === 0) {
      return [];
    }

    // Mapping 
    let map: Map<string, number> = SumByPropertyName(dataArray, keys);

    // Sorting
    switch (sort) {
    case 'ascending':  
      map = new Map([...map.entries()].sort((a, b) => a[1] - b[1]));     
      break;
    case 'descending':
      map = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
      break;
    // case 'byDate': 
    //   map = new Map(Array.from(map).sort(([a], [b]) => a.localeCompare(b)));
    //   break;
    default: 
      break;
    }

    // Genreting array based on resultLengh
    return Array.from(map, ([key, val]) => ({ name: key, value: val })).slice(0, resultLenght && resultLenght < map.size ? resultLenght : map.size);
  }
}
