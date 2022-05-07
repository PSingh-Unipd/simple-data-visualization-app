import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { TransactionsActions } from '../../actions';
import { TransactionsService } from '../../services/transactions.service';


@Injectable()
export class TransactionsEffects {

  constructor(private actions$: Actions, private service: TransactionsService) {}

  loadTransactions$ = createEffect(() => this.actions$.pipe(
    ofType(TransactionsActions.loadTransactions),
    mergeMap((action) => this.service.getTranscations(action.key)
      .pipe(
        map(data => (TransactionsActions.transactionsLoadingDone({ data: data, key: action.key }))),
        catchError(() => EMPTY)
      ))
    )
  );
}
