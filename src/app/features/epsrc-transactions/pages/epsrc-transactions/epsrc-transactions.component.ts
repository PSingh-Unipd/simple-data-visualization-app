import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { delay, filter, mergeMap, Observable, Subject, takeUntil, tap } from 'rxjs';
import { ITransaction } from '../../interfaces';
import { IEPSRCFeatureState } from '../../interfaces/feature-state/feature-state.interface';
import { TransactionsActions } from '../../store/actions';
import { TranscationsSelectors } from '../../store/selectors';


const tableColunmConfig : {displayHeader: string, objKey: string }[] = [
  { displayHeader: 'TransactionNumber', objKey: 'TransactionNumber' },
  { displayHeader: 'DepartmentFamily', objKey: 'DepartmentFamily' }, 
  { displayHeader: 'Entity', objKey: 'Entity' }, 
  { displayHeader: 'Date', objKey: 'Date' }, 
  { displayHeader: 'ExpenseType', objKey: 'ExpenseType' }, 
  { displayHeader: 'ExpenseArea', objKey: 'ExpenseArea' }, 
  { displayHeader: 'Supplier', objKey: 'Supplier' },
  { displayHeader: 'Amount', objKey: 'Amount' }, 
  { displayHeader: 'InvoiceCurrencyUnit', objKey: 'InvoiceCurrencyUnit' }];

  const dataList: { viewValue: string, value: string }[] = [
    { value: 'EPSRCSpendDataAug2016', viewValue: 'August 2016' },
    { value: 'EPSRCSpendDataAug2015', viewValue: 'August 2015' },
    { value: 'EPSRCSpendDataJuly2015', viewValue: 'July 2015' },
    { value: 'EPSRCSpendDataJune2015', viewValue: 'June 2015' },
    { value: 'EPSRCSpendDataApril2015', viewValue: 'April 2015' },
    { value: 'EPSRCSpendDataDec2014', viewValue: 'December 2014' },
    { value: 'EPSRCspendDataDec2013', viewValue: 'December 2013' }
  ];

@Component({
  selector: 'app-epsrc-transactions',
  templateUrl: './epsrc-transactions.component.html',
  styleUrls: ['./epsrc-transactions.component.scss']
})
export class EpsrcTransactionsComponent implements OnInit, OnDestroy {

  filterControl: FormControl = new FormControl('');
  filterControlOptions: { viewValue: string, value: string }[] = dataList;

  
  transactions$!: Observable<ITransaction[]>;
  tableColunms = tableColunmConfig;
  
  private readonly _destroy$: Subject<void> = new Subject<void>();

  constructor(private store: Store<IEPSRCFeatureState>) { }

  ngOnInit(): void {
    this.transactions$ = this.filterControl.valueChanges.pipe(
      delay(100),
      tap(value => this.store.dispatch(TransactionsActions.loadTransactions({ key: value }))),
      mergeMap(value => this.store.select(TranscationsSelectors.getTransactions(value))),
      filter((transactions: ITransaction[]) => transactions !== undefined),
      takeUntil(this._destroy$),
      tap(data => {
        console.log('data', data)
      })
    );
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
