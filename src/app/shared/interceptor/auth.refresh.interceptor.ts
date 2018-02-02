import { HttpClient, HttpErrorResponse, HttpHandler, HttpRequest, HttpResponse, HttpSentEvent } from '@angular/common/http';

import { AuthService } from 'app/shared/services/auth/auth.service';
import { HttpEvent } from '@angular/common/http/src/response';
import { HttpInterceptor } from '@angular/common/http/src/interceptor';
import { Injectable } from '@angular/core';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthRefreshTokenInterceptor implements HttpInterceptor {
    
    currentRequest:HttpRequest<any>;
    auth:AuthService

    constructor(
        private injector:Injector,
        private router:Router
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {
        this.auth=this.injector.get(AuthService);
        var token= (this.auth.isLoggedIn()) ? this.auth.token:null;
        if(token){
            this.currentRequest=req;
            return next.handle(req)
                       .do((event:HttpEvent<any>)=>{
                           if(event instanceof HttpResponse){
                                console.log(event);
                           }
                       })
                       .catch(error => {
                           return this.handleError(error);
                       });
        }else{
            return next.handle(req);
        }
    }

    handleError(err:any){
        if(err instanceof HttpErrorResponse){
            if(err.status === 401){
                this.auth.refreshToken()
                    .subscribe(res=>{
                        if(res){
                            console.log('Refresh Token Got!');
                            // I do not got it.
                            var http=this.injector.get(HttpClient);
                            http.request(this.currentRequest)
                                .subscribe(result=>{

                                }, error=>console.log(error));
                        }else{
                            console.log('Refresh Token Failed!');
                            this.auth.logout();
                            this.router.navigate(['login']);
                        }

                    }, error=>console.log(error));
            }
            return Observable.throw(err);
        }
    }
}