import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements AfterViewInit, OnChanges {
  @Input() tableData: T[] = [];
  @Input() tableColumns: {displayHeader: string, objKey: string }[] = [];
  @Input() paginationSize: number[] = [10, 20];
  @Input() cssClass: string = ''; 
  @Input() showLoader: boolean = true;

  displayedColumns: string[] = [];
  dataSource!: MatTableDataSource<T>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
  	this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
  	this.setupTableData();
  }

  private setupTableData(): void {
  	this.displayedColumns = this.tableColumns.map((currentValue) => currentValue.objKey);
  	this.dataSource = new MatTableDataSource<T>(this.tableData);
  	this.dataSource.paginator = this.paginator;
  }
}