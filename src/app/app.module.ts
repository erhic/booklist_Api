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

const  routes=[
  {path:'/',component:AccountComponent},
  {path:'',component:AccountComponent},
  {path:'',component:AccountComponent},
  {path:'',component:AccountComponent},
  {path:'',component:AccountComponent},
  {path:'',component:AccountComponent},

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
    AccountComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
