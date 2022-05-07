import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IEPSRCFeatureState } from '../../interfaces/feature-state/feature-state.interface';
import { TransactionsActions } from '../../store/actions';

@Component({
  selector: 'app-epsrc-transactions',
  templateUrl: './epsrc-transactions.component.html',
  styleUrls: ['./epsrc-transactions.component.scss']
})
export class EpsrcTransactionsComponent implements OnInit {

  constructor(private store: Store<IEPSRCFeatureState> ) { }

  ngOnInit(): void {
    this.store.dispatch(TransactionsActions.loadTransactions({ key: 'EPSRCSpendDataApril2015' }));
  }
}
