import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { ITransaction } from '../../../interfaces';
import { IEPSRCFeatureState } from '../../../interfaces/feature-state/feature-state.interface';
import { ITransactionsReducerState } from '../../reducers/transactions/transactions.reducer';

const state: MemoizedSelector<object, IEPSRCFeatureState> = createFeatureSelector<IEPSRCFeatureState>('epsrc-transactions');

export const getTransactions: (key: string) => MemoizedSelector<object, ITransaction[]> = (key: string) => createSelector<object, IEPSRCFeatureState, ITransaction[]>(
  state,
  (state) => state.transactions[key]
);

export const getAllTransactions: MemoizedSelector<object, ITransactionsReducerState> = createSelector<object, IEPSRCFeatureState, ITransactionsReducerState>(
  state,
  (state) => state.transactions
);