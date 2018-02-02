import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class AuthService {

    clientId="DneTraining";
    API_ENDPOINT='/api/token/auth';
    /**
     *
     */
    constructor(private httpClient: HttpClient,
                @Inject(PLATFORM_ID)private platformId) {
        
    }

    login(username:string, password:string): Observable<boolean>{
        var data={
            username:username,
            password:password,
            client_id:this.clientId,
            grant_type:"password",
            scope:"offline_access profile email"
        };
        console.log(data);
        return this.httpClient.post(this.API_ENDPOINT, data)
                    .do(console.log)
                    .map((res:any)=>{
                        let token= res && res.token;
                        console.log(token);
                        if(token){
                            this.setAuth(token);
                            return true;
                        }
                        return Observable.throw('Unauthorized');
                   })
                   
                   .catch(error => {
                        return new Observable<any>(error);
                   });
    }

    private setAuth(token){
        if(isPlatformBrowser(this.platformId)){
            localStorage.setItem('auth',JSON.stringify(token));
        }else{
            localStorage.removeItem('auth');
        }
    }

    getAuth(){
        if(isPlatformBrowser(this.platformId)){
            var token=localStorage.getItem('auth');
            if(token){
                return JSON.parse(token);
            }
        }
        return null;
    }

    isLoggedIn():boolean{
        if(isPlatformBrowser(this.platformId)){
            return localStorage.getItem('auth') != null;
        }
        return false;
    }

    getValue(){
        return this.httpClient.get('/api/SampleData');
    }

    logout(){
        if(localStorage.getItem('auth')){
            localStorage.removeItem('auth');
            return true;
        }
        return true;
    }

}

interface TokenResponse{
    token:string;
    expiration:number;
}