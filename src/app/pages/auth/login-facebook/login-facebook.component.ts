import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

import { AuthService } from '../../../shared/services/auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

declare var window:any;
declare var FB:any;


@Component({
  selector: 'app-login-facebook',
  templateUrl: './login-facebook.component.html',
  styleUrls: ['./login-facebook.component.scss']
})
export class LoginFacebookComponent implements OnInit {

  constructor(
    private httpClien:HttpClient,
    private router:Router,
    private authService:AuthService,
    private zone:NgZone,
    @Inject(PLATFORM_ID) private platformId,
  ) { }

  ngOnInit() {
    if(!isPlatformBrowser(this.platformId)) return;
    
    if(typeof(FB)==='undefined'){
      window.fbAsyncInit= () => {
        this.zone.run(()=>{
          FB.init({
            appId      : '1546307152266267',
            cookie     : true,
            xfbml      : true,
            version    : 'v2.5'
          });
            
          FB.AppEvents.logPageView();

          FB.Event.subscribe('auth.statusChange',
          ((result:any)=>{
            console.log('FB Auth Status Change');
            console.log(result);
            if(result.status ==='connected'){
              console.log('connected to Facebook');
              this.onConnect(result.authResponse.accessToken);
            }
          }));
        }
        );
      }
      (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }else{
      window.FB.XFBML.parse();
      FB.getLoginStatus((response:any)=>{
        if(response.status==='connected'){
          FB.logout((res:any)=>{

          });
        }
      });
    }
  }


//   {
//     status: 'connected',
//     authResponse: {
//         accessToken: '...',
//         expiresIn:'...',
//         signedRequest:'...',
//         userID:'...'
//     }
// }
// {
//     status: 'connected',
//     authResponse: {
//         accessToken: '...',
//         expiresIn:'...',
//         signedRequest:'...',
//         userID:'...'
//     }
// }

  onConnect(accessToken){
    this.authService.getFbAccessToken(accessToken).subscribe(res=>{
      if(res){
          console.log('Login Successful');
          console.log(res);
          this.authService.setAuth(res);
      }else{
          console.log("Authentication Failed");
      }
    }, error=>console.log(error));
  }
}
