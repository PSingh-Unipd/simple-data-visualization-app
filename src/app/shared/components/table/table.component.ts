import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ITransaction } from 'src/app/features/epsrc-transactions/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnChanges {
  @Input() tableData: any[] = [];
  @Input() tableColumns: {displayHeader: string, objKey: string }[] = [];
  @Input() paginationSize: number[] = [5, 10, 20];
  @Input() cssClass: string = ''; // For custom table size 
  @Input() showLoader: boolean = true;

  displayedColumns: string[] = [];
  dataSource!: MatTableDataSource<ITransaction>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
  	this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
  	this.setupTableData();
  }

  private setupTableData(): void {
  	this.displayedColumns = this.tableColumns.map((currentValue) => currentValue.objKey);
  	this.dataSource = new MatTableDataSource<ITransaction>(this.tableData);
  	this.dataSource.paginator = this.paginator;
  }
}