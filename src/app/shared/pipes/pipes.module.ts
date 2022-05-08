import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartDataMappingPipe } from './pie-chart-data-mapping.pipe/pie-chart-data-mapping.pipe';


@NgModule({
  declarations: [
    PieChartDataMappingPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [PieChartDataMappingPipe]
})
export class PipesModule { }
