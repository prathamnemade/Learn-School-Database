import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { GetValidationMessages } from '../login/validationMessages';
import { RegisterService } from './register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userRegisterForm: FormGroup;
  account_validation_messages = this.validation_messages.account_validation_messages
  constructor(private formBuilder: FormBuilder, public validation_messages: GetValidationMessages,public registerService:RegisterService) { }
  ngOnInit() {
    this.formSkeleton()
    this.registerService.dataSaved=""
  }
  formSkeleton() {
    this.userRegisterForm = new FormGroup({
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
