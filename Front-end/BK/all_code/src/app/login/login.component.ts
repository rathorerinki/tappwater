import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
// import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  email = new FormControl('', [Validators.required, Validators.email]);
  // password= new FormControl('', [Validators.required, Validators.password]);
  constructor(private fb: FormBuilder) {
  
   }
  ngOnInit() {
   
    }

    getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
             this.email.hasError('email') ? 'Not a valid email' :
              '';
            // this.password.hasError('required')?'You must enter a value':this.password.hasError('password') ? 'Not a valid password' :
            // '';
    }

    onSubmit() {
      // TODO: Use EventEmitter with form value
      console.warn(this.profileForm.value);
    }
  }


