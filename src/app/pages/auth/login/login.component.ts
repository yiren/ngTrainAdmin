import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,
              private authService:AuthService) { }


  loginForm:FormGroup;
  isSubmitted=false;            

  ngOnInit() {
    this.loginForm=this.fb.group({
      'loginName':['', Validators.required],
      'password':['', Validators.required]
    })

  }

  value;
  GetValue(){
    this.authService.getValue().subscribe(res=>this.value=res);
  }

  isLoggout;
  logout(){
    if(this.authService.logout())
    this.isLoggout=true;
  }

  onSubmit(){
    console.log(this.loginForm);
    this.authService.login(this.loginForm.value.loginName, this.loginForm.value.password)
        .subscribe(res=>{
          alert("Login Successful!"+
          this.authService.getAuth());
          console.log(this.authService.getAuth());
        },(err)=>{
          console.log(err);
        });
  }

  

}
