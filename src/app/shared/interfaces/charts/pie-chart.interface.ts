// At the moment we have only 1 type of data(sum), but we can add new types in the future without breaking anything.
export enum PieChartDataType {
    sum = 'sum' // Will return data for pie chart containg the sum of property value
}


export interface IpieChartData {
    name: string;
    value: number;
}