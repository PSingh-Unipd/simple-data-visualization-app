import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleChartDataTransformingPipe } from './single-chart-data-transforming/single-chart-data-transforming.pipe';
import { MultiChartDataTransformingPipe } from './multi-chart-data-transforming/multi-chart-data-transforming.pipe';

@NgModule({
  declarations: [
    SingleChartDataTransformingPipe,
    MultiChartDataTransformingPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [SingleChartDataTransformingPipe, MultiChartDataTransformingPipe]
})
export class PipesModule { }
