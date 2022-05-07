import { ActionReducerMap } from "@ngrx/store";
import { IEPSRCFeatureState } from "../../interfaces/feature-state/feature-state.interface";
import { TransactionReducer } from './transactions/transactions.reducer';

export const featureReducers: ActionReducerMap<IEPSRCFeatureState> = {
	transactions: TransactionReducer
}