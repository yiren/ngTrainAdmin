import { CanActivateChild, RouterModule } from '@angular/router';

import { AuthEffects } from './store/auth.effects';
import { CommonModule } from '@angular/common';
import { CommonSharedModule } from 'app/shared/common.shared.module';
import { EffectsModule } from '@ngrx/effects';
import { LoginComponent } from './login/login.component';
import { LoginExplicitFlowComponent } from './login-explicit-flow/login-explicit-flow.component';
import { LoginFacebookComponent } from './login-facebook/login-facebook.component';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import { TrainAdminGuard } from '../../shared/guard/trainadmin.guard';
import { UserPasswordComponent } from './user/userpassword.component';
import { authReducer } from './store/auth.reducers';

const AUTH_ROUTE=[
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'changepassword', component: UserPasswordComponent, CanActivate:[TrainAdminGuard]},
  {path: 'loginWithFb', component: LoginFacebookComponent},
  {path: 'loginWithExplicitFlow', component: LoginExplicitFlowComponent},
];

@NgModule({
  imports: [
    CommonSharedModule,
    CommonModule,
    RouterModule.forChild(AUTH_ROUTE),
    
  ],
  declarations: [
    //LoginComponent, 
    LoginFacebookComponent, 
    LoginExplicitFlowComponent, 
    UserPasswordComponent]
})
export class AuthModule { }
