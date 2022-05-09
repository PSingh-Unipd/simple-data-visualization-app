import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleChartDataTransformingPipe } from './pie-chart-data-mapping.pipe/pie-chart-data-mapping.pipe';
import { ChartMultiDataTransformingPipe } from './chart-multi-data-transforming.pipe.spec/chart-multi-data-transforming.pipe';

@NgModule({
  declarations: [
    SingleChartDataTransformingPipe,
    ChartMultiDataTransformingPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [SingleChartDataTransformingPipe, ChartMultiDataTransformingPipe]
})
export class PipesModule { }
