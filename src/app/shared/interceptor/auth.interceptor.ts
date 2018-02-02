import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, Injector } from '@angular/core';

import { AuthService } from '../services/auth/auth.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    
    
    constructor(//private authService:AuthService,
                private injector: Injector) { }

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

        return next.handle(req);
    };
}