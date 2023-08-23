import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransferComponent } from './transfer/transfer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';

const  routes=[
  // {path: '', redirectTo: '/account', pathMatch: 'full'},
  // {path:'',component:AccountComponent},
  {path:'profile',component:ProfileComponent},
  {path:'deposit',component:DepositComponent},
  {path:'withdraw',component:WithdrawComponent},
  {path:'transfer',component:TransferComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavComponent,
    DepositComponent,
    WithdrawComponent,
    TransferComponent,
    SidenavComponent,
    AccountComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
