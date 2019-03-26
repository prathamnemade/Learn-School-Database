import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { GetValidationMessages } from './validationMessages';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userDetailsForm: FormGroup;
  account_validation_messages = this.validation_messages.account_validation_messages
  constructor(public loginService:LoginService,private formBuilder: FormBuilder, public validation_messages: GetValidationMessages) { }
  ngOnInit() {
    this.formSkeleton()
  }
  formSkeleton() {
    this.userDetailsForm = new FormGroup({
      'emailID': new FormControl('', Validators.compose([
        Validators.required,
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.required,
      ]))
    })
  }
}
