import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceComponent } from './balance/balance.component';
import { DepositCoinsComponent } from './deposit-coins/deposit-coins.component';
import { DepositNotesComponent } from './deposit-notes/deposit-notes.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component';

export const routes: Routes = [
  //Addressing the instance for when the path is an empty string.
  //full means the whole url path needs to be matched.
  { path: '', redirectTo: '/balance', pathMatch: 'full' },
  { path: 'balance', component: BalanceComponent },
  {
    path: 'deposit',
    component: DepositComponent,

    // Adding the Children routes
    children: [
      { path: 'coins', component: DepositCoinsComponent },
      { path: 'notes', component: DepositNotesComponent },
    ],
  },
  { path: 'withdraw', component: WithdrawComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
