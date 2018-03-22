import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-password',
  templateUrl: './userpassword.component.html',
  styleUrls: ['./userpassword.component.scss']
})
export class UserPasswordComponent implements OnInit {

  constructor(private fb:FormBuilder,
              private authService:AuthService,
              private router:Router) { }
  changeForm:FormGroup;
  isSubmitted=false;
  isPWEqual(group:FormGroup){
    //console.log(group);
    if(group.controls['password'].value===group.controls['confirmPassword'].value){
      return null;
    }
    if(!group.controls['confirmPassword'].pristine){
      group.controls['confirmPassword'].setErrors({passwordMismatch:true})
    }
    
  }
  onSubmit(){
    //console.log(this.changeForm.value);
    this.authService.changePassword(this.changeForm.value)
        .subscribe(res=>{
          console.log(res);
          this.isSubmitted=true;
          setTimeout(()=>this.router.navigate(['/']),1000);
        });
  }
  ngOnInit() {
    this.changeForm=this.fb.group({
      'oldPassword':['', Validators.required],
      'password':['', Validators.required],
      'confirmPassword':['', Validators.required]
    }, {
      validator: this.isPWEqual
    });
  }

  

}
