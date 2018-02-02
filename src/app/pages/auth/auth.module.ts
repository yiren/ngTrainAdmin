import { CommonModule } from '@angular/common';
import { CommonSharedModule } from 'app/shared/common.shared.module';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const AUTH_ROUTE=[
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [
    CommonSharedModule,
    CommonModule,
    RouterModule.forChild(AUTH_ROUTE)
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }
