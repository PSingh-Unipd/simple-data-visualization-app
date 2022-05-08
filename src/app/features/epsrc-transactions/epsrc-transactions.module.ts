import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpsrcTransactionsComponent } from './pages/epsrc-transactions/epsrc-transactions.component';
import { HttpClientModule } from '@angular/common/http';
import { TransactionsService } from './store/services/transactions.service';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { featureReducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { featureEffects } from './store/effects';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponenetsModule } from 'src/app/shared/components/componenets.module';


@NgModule({
	declarations: [
		EpsrcTransactionsComponent
	],
	imports: [
		CommonModule,
		HttpClientModule,
		RouterModule.forChild([
			{
				path: '',
				component: EpsrcTransactionsComponent
			}
		]),
		StoreModule.forFeature('epsrc-transactions', featureReducers),
		EffectsModule.forFeature(featureEffects),
		ReactiveFormsModule,
		MatSelectModule,
		MatFormFieldModule,
		ComponenetsModule
	],
	providers: [TransactionsService]
})
export class EpsrcTransactionsModule { }
