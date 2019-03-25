import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { GetValidationMessages } from '../login/validationMessages';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userDetailsForm: FormGroup;
  account_validation_messages = this.validation_messages.account_validation_messages
  constructor(private formBuilder: FormBuilder, public validation_messages: GetValidationMessages) { }
  ngOnInit() {
    this.formSkeleton()
  }
  formSkeleton() {
    this.userDetailsForm = new FormGroup({
      'fullName': new FormControl('', Validators.compose([
        Validators.maxLength(25),
        Validators.required
      ])),
      'emailID': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ])),
      'password': new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$'),
      ]))
    })
  }

}
