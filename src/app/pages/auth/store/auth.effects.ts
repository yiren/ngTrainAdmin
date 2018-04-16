import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

import * as AuthActions from './auth.actions';

import {Actions, Effect} from '@ngrx/effects';

import { Action } from '@ngrx/store';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects{
    @Effect()
    authLogin$:Observable<Action>=this.actions$
        .ofType(AuthActions.LOGINACTION)
        .map((action:AuthActions.LoginAction)=>action.payload)
        .switchMap(authData=>this.authService.login(authData.username,authData.password))
        .do(console.log)
        .map(res=>new AuthActions.SetTokenAction(res.token));

    @Effect({dispatch:false})
    authSetToken=this.actions$
        .ofType(AuthActions.SET_TOKEN)
        .map(token=>this.authService.setAuth(token))
        .do(()=>this.router.navigate(['/']));


    @Effect({dispatch:false})
    authLogout=this.actions$
        .ofType(AuthActions.LOGOUTACTION)
        .map(token=>this.authService.logout())
        .do(()=>this.router.navigate(['/']));

    constructor(
        private actions$: Actions,
        private authService:AuthService,
        private router:Router
    ){}
}