import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'epsrc-transactions',
    pathMatch: 'full'
  },
  {
    path: 'epsrc-transactions',
    loadChildren: () => import('./features/epsrc-transactions/epsrc-transactions.module').then(m => m.EpsrcTransactionsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
