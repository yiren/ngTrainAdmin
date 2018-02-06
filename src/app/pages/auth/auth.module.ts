import { CommonModule } from '@angular/common';
import { CommonSharedModule } from 'app/shared/common.shared.module';
import { LoginComponent } from './login/login.component';
import { LoginExplicitFlowComponent } from './login-explicit-flow/login-explicit-flow.component';
import { LoginFacebookComponent } from './login-facebook/login-facebook.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const AUTH_ROUTE=[
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'loginWithFb', component: LoginFacebookComponent},
  {path: 'loginWithExplicitFlow', component: LoginExplicitFlowComponent},
];

@NgModule({
  imports: [
    CommonSharedModule,
    CommonModule,
    RouterModule.forChild(AUTH_ROUTE)
  ],
  declarations: [LoginComponent, LoginFacebookComponent, LoginExplicitFlowComponent]
})
export class AuthModule { }
