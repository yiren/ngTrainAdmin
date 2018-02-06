import { Component, Inject, NgZone, OnInit, PLATFORM_ID } from '@angular/core';

import { AuthService } from '../../../shared/services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

declare var window:any;

@Component({
  selector: 'app-login-explicit-flow',
  templateUrl: './login-explicit-flow.component.html',
  styleUrls: ['./login-explicit-flow.component.scss']
})
export class LoginExplicitFlowComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID)private platformId,
    private http:HttpClient,
    private router:Router,
    private authService:AuthService,
    private zone:NgZone
  ) { }

  externalProviderWindow:any;
  
  ngOnInit() {
    if(!isPlatformBrowser(this.platformId)){
      return;
    }
    var self=this;
    this.closePopupWindow();
    if(!window.externalProviderLogin){
      window.externalProviderLogin=function(auth){
        self.zone.run(()=>{
          console.log("Explicit Flow Login Successful");
          self.authService.setAuth(auth);
          console.log(localStorage.getItem('auth'));
        });
      }
    }

  }

  closePopupWindow(){
    if(this.externalProviderWindow){
      this.externalProviderWindow.close();
    }
    this.externalProviderWindow=null;
  }
  ExplicitLogin(provider){
    if(!isPlatformBrowser(this.platformId)){
      return;
    }
    var popParams="toolbar=yes,scrollbars=yes,resizable=yes,width=1050,height=550";
    this.closePopupWindow();
    this.externalProviderWindow =
      window.open(`http://localhost:62864/api/token/auth/explictflowAuth/${provider}`, popParams, false);
      //window.open(`${this.authService.API_ENDPOINT}/explictflowAuth/${provider}`, popParams, false);
  }
}
