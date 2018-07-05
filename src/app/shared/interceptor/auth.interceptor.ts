import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, Injector } from '@angular/core';

import { AuthService } from '../services/auth/auth.service';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    
    
    constructor(//private authService:AuthService,
                private injector: Injector,
                private router:Router) { }

    private handleAuthError(err:HttpErrorResponse){
        if(err.status===401 || err.status===403){
            
            this.router.navigate(['/auth']);
            var snackbar=this.injector.get(MatSnackBar)

            //console.log(err);
            snackbar.open('帳號或是密碼錯誤，請重新輸入。','關閉',{
                duration:1000
            });
            return Observable.of(err.message);
        }
        return Observable.throw(err);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>{
        var auth=this.injector.get(AuthService);
        var token=(auth.isLoggedIn() ? auth.getAuth(): null);
        if(token){
            req=req.clone({
                setHeaders:{
                    Authorization:`Bearer ${token}`
                }
            })
        }

        return next.handle(req).catch(x=>this.handleAuthError(x));
    };
}
