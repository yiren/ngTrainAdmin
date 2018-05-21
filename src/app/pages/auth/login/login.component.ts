import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../shared/services/auth/auth.service';
import { AuthState } from '../store/auth.state';
import { LoginAction } from '../store/auth.actions';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,
              private authService:AuthService,
              private router:Router,
              private store:Store<AuthState>) { }


  loginForm:FormGroup;
  isSubmitted=false;            

  ngOnInit() {
    this.loginForm=this.fb.group({
      'username':['', [Validators.required]],
      'password':['', Validators.required]
    })

  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.store.dispatch(new LoginAction(this.loginForm.value));
    // this.authService.login(this.loginForm.value.loginName, this.loginForm.value.password)
    //     .subscribe(res=>{
    //       //console.log(res);
    //       // alert("Login Successful!"+
    //       // this.authService.getAuth());
    //       //console.log(this.authService.getAuth());
    //       this.router.navigate(['/'])
    //     },(err)=>{
    //       //console.log(err);
    //     });
  }

  

}
