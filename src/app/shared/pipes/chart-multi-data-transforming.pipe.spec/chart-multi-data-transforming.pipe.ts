import { Pipe, PipeTransform } from '@angular/core';
import { GroupByPropertyName, SumByPropertyName } from '../../functions';

@Pipe({
  name: 'chartMultiDataTransforming'
})
export class ChartMultiDataTransformingPipe implements PipeTransform {

  transform<T>(dataArray: Array<T>, properties: { byProperty: string, valueProperty: string, seriesPropery?: string, singleSeriesLabel: string }): any[] {
    if (dataArray.length === 0) {
      return [];
    }

    // We need to create just one series list
    if (properties.singleSeriesLabel) {
      let map: Map<string, number> = SumByPropertyName(dataArray, properties);

      return [{ name: properties.singleSeriesLabel, series: Array.from(map, ([key, val]) => ({ name: key, value: val })) }];
    } else if (properties.seriesPropery !== undefined) {
      return [];
      // TODO : Add logic to handle multi series data! Working exemple(not a best solution) :
      // let map: Map<string, T[]> = GroupByPropertyName(dataArray, properties.byProperty);
      // return Array.from(map, ([key, subArray]: [string, T[]]) => ({ name: key, series: Array.from(SumByPropertyName(subArray, { byProperty: properties.seriesPropery as string, valueProperty: properties.valueProperty }), ([key, val]) => ({ name: key, value: val })) }));
    }
    return [];
  }
}



