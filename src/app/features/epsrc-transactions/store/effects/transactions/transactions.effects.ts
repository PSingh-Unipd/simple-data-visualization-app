import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, EMPTY, filter, map, mergeMap, withLatestFrom } from 'rxjs';
import { TransactionsActions } from '../../actions';
import { TranscationsSelectors } from '../../selectors';
import { TransactionsService } from '../../services/transactions.service';


@Injectable()
export class TransactionsEffects {

  constructor(private actions$: Actions, private service: TransactionsService, private store: Store<any>) { }

  loadTransactions$ = createEffect(() => this.actions$.pipe(
    ofType(TransactionsActions.loadTransactions),
    withLatestFrom(this.store.select(TranscationsSelectors.getAllTransactions)),
    filter(([action, data]) => data[action.key] === undefined),
    mergeMap(([action, data]) => this.service.getTranscations(action.key)
      .pipe(
        map(data => (TransactionsActions.transactionsLoadingDone({ data: data, key: action.key }))),
        catchError(() => EMPTY)
      ))
  ));
}
