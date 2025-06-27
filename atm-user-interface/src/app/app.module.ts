// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { NgModule } from '@angular/core';

// @NgModule({
//   declarations: [AppComponent],
//   imports: [BrowserModule, AppRoutingModule],
//   providers: [],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BalanceComponent } from './balance/balance.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

@NgModule({
  declarations: [
    AppComponent,
    BalanceComponent,
    DepositComponent,
    WithdrawComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
