import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, delay, filter, mergeMap, Subject, takeUntil, tap } from 'rxjs';
import { ITransaction } from '../../interfaces';
import { IEPSRCFeatureState } from '../../interfaces/feature-state/feature-state.interface';
import { TransactionsActions } from '../../store/actions';
import { TranscationsSelectors } from '../../store/selectors';


const tableColunmConfig: { displayHeader: string, objKey: string }[] = [
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
  { value: 'EPSRCSpendDataAug2015', viewValue: 'August 2015' },
  { value: 'EPSRCSpendDataJuly2015', viewValue: 'July 2015' },
  { value: 'EPSRCSpendDataJune2015', viewValue: 'June 2015' },
  { value: 'EPSRCSpendDataMay2015', viewValue: 'May 2015' },
  { value: 'EPSRCSpendDataApril2015', viewValue: 'April 2015' }
];

@Component({
  selector: 'app-epsrc-transactions',
  templateUrl: './epsrc-transactions.component.html',
  styleUrls: ['./epsrc-transactions.component.scss']
})
export class EpsrcTransactionsComponent implements OnInit, OnDestroy {

  filterControl: FormControl = new FormControl('');
  filterControlOptions: { viewValue: string, value: string }[] = dataList;

  chart1MaxNumber: number = 10;
  chart1Form: FormGroup = new FormGroup({
    maxNumberControl: new FormControl(this.chart1MaxNumber, [Validators.min(1)]),
    sortingControl: new FormControl('descending')
  });
  
  transactions: ITransaction[] = [];
  tableColunms = tableColunmConfig;
  
  private readonly _destroy$: Subject<void> = new Subject<void>();

  constructor(private store: Store<IEPSRCFeatureState>) { }

  ngOnInit(): void {
    this.chart1Form.controls['maxNumberControl'].valueChanges.pipe(
      debounceTime(500),
      filter((value) => value > 0),
      takeUntil(this._destroy$)
    ).subscribe((value: number) => this.chart1MaxNumber = value);

    this.filterControl.valueChanges.pipe(
      delay(100),
      tap(value => this.store.dispatch(TransactionsActions.loadTransactions({ key: value }))),
      mergeMap(value => this.store.select(TranscationsSelectors.getTransactions(value))),
      filter((transactions: ITransaction[]) => transactions !== undefined),
      takeUntil(this._destroy$),
    ).subscribe((data: ITransaction[]) => this.transactions = data);

    this.filterControl.setValue('EPSRCSpendDataAug2015');
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}