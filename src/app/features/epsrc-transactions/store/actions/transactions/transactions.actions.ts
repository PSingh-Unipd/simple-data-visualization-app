import { createAction, props } from '@ngrx/store';
import { ITransaction } from '../../../interfaces';

export const loadTransactions = createAction(
	'[Transactions] Load transactions',
	props<{ key: string }>()
);

export const transactionsLoadingDone = createAction(
	'[Transactions] Transactionss oading done',
	props<{ key: string, data: ITransaction[] }>()
);




