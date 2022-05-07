import { createReducer, on } from '@ngrx/store';
import { ITransaction } from '../../../interfaces';
import { TransactionsActions } from '../../actions';

export interface ITransactionsReducerState {
  [key: string]: ITransaction[]
}

export const initialState: ITransactionsReducerState = { };

export const TransactionReducer = createReducer(
  initialState,
  on(TransactionsActions.transactionsLoadingDone, (state, action) => ({ ...state, [action.key]: action.data }))
);
