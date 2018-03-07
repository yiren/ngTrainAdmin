import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-user-password',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserPasswordComponent implements OnInit {

  constructor(private fb:FormBuilder,
              private authService:AuthService) { }
  changeForm:FormGroup;
  isSubmitted=false;
  isPWEqual(group:FormGroup){
    console.log(group);
    if(group.controls['password'].value===group.controls['confirmPassword'].value){
      return null;
    }
    if(!group.controls['confirmPassword'].pristine){
      group.controls['confirmPassword'].setErrors({passwordMismatch:true})
    }
    
  }
  onSubmit(){
    console.log(this.changeForm.value);
  }
  ngOnInit() {
    this.changeForm=this.fb.group({
      'password':['', Validators.required],
      'confirmPassword':['', Validators.required]
    }, {
      validator: this.isPWEqual
    });
  }

  

}
