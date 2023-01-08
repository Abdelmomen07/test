import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mustMatch } from '../confirmPwd';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm : FormGroup
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this. signUpForm = this.formBuilder.group({
      firstName:["",[Validators.minLength(2),Validators.required]],
      lastName:["",[Validators.maxLength(3),Validators.required]],
      email:["",[Validators.email,Validators.required]],
      password:[""],
      confirmPassword:[""],
      
    },
    {
      validator:mustMatch("password","confirmPassword")
    }
    )
  }
  signUp(data:any){
    console.log("form :",data);
    
  }
}
