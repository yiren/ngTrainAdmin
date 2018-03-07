import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,
              private authService:AuthService,
              private router:Router) { }


  loginForm:FormGroup;
  isSubmitted=false;            

  ngOnInit() {
    this.loginForm=this.fb.group({
      'loginName':['', Validators.required],
      'password':['', Validators.required]
    })

  }

  onSubmit(){
    console.log(this.loginForm);
    this.authService.login(this.loginForm.value.loginName, this.loginForm.value.password)
        .subscribe(res=>{
          //console.log(res);
          // alert("Login Successful!"+
          // this.authService.getAuth());
          //console.log(this.authService.getAuth());
          this.router.navigate(['/'])
        },(err)=>{
          console.log(err);
        });
  }

  

}
