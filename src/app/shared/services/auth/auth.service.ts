import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class AuthService {

    clientId="DneTraining";
    API_ENDPOINT='/api/token/auth';

    tokenSubject=new BehaviorSubject('');
    /**
     *
     */

    token:TokenResponse;
    constructor(private httpClient: HttpClient,
                @Inject(PLATFORM_ID)private platformId) {
        
    }
    
    getAuthFromServer(data:any):Observable<any>
    //:Observable<boolean>
    {
       // console.log(data);
        const apiReq=this.httpClient.post(this.API_ENDPOINT, data)
        //console.log(apiReq);
        return apiReq;
                   //.do(console.log)
    //                 .map((res:any)=>{
    //                     let token= res && res.token;
    //                     console.log(token);
    //                     if(token){
    //                         this.token=token;
    //                         this.setAuth(token);
    //                         return true;
    //                     }
    //                     return Observable.throw('Unauthorized');
    //                }
    //                 )
    //                .catch(error => {
    //                     return new Observable<any>(error);
    //                });
     }


    getFbAccessToken(accessToken:string){
        //console.log(accessToken+' :before Request');
        return this.httpClient.post<TokenResponse>(`${this.API_ENDPOINT}/facebook`,{
            access_token:accessToken,
            client_id:this.clientId
        });
    }

    refreshToken():Observable<boolean>{
        var data={
            client_id:this.clientId,
            grant_type:"refresh_token",
            refresh_token:this.token.refresh_token,
            scope:"offline_access profile email"
        };
        
        return this.getAuthFromServer(data)
    }

    login(username:string, password:string){
        var data={
            username:username,
            password:password,
            client_id:this.clientId,
            grant_type:"password",
            scope:"offline_access profile email"
        };
        
        return this.getAuthFromServer(data);
    }

    setAuth(token){
        if(isPlatformBrowser(this.platformId)){
            if(this.getAuth()) localStorage.removeItem('auth');

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

    changePassword(data){
        return this.httpClient.post('/api/UserManage',data);
    }

    isLoggedIn():boolean{
        if(isPlatformBrowser(this.platformId)){
            return localStorage.getItem('auth') != null;
        }
        return false;
    }

    getValue(){
        return this.httpClient.get('/api/token');
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
    refresh_token:string;
}