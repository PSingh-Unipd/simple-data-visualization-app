import { ISingleChartData } from "./single-chart-data.interface";

export interface IMultiChartData {
    name: string, 
    series: ISingleChartData[]
}