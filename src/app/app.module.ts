import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { LoginComponent } from './main-screen/login/login.component';
import { RegisterComponent } from './main-screen/register/register.component';
import { SubMainComponent } from './sub-main/sub-main.component';
import { ViewComponent } from './sub-main/view/view.component';
import { AddComponent } from './sub-main/add/add.component';
import { AppRoutingModule } from './app-routing.module';
import { GetValidationMessages } from './main-screen/login/validationMessages';
import { LoginService } from './main-screen/login/login.service';
import { RegisterService } from './main-screen/register/register.service';


import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import {DataTableModule} from 'primeng/datatable';
import { AddService } from './sub-main/add/add.service';
import { ViewService } from './sub-main/view/view.service';
@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    LoginComponent,
    RegisterComponent,
    SubMainComponent,
    ViewComponent,
    AddComponent
  ],
  imports: [InputTextModule, CalendarModule, DropdownModule, RadioButtonModule,DataTableModule,
    BrowserModule, BrowserAnimationsModule, ReactiveFormsModule, HttpClientModule, FormsModule, AppRoutingModule
  ],
  providers: [ViewService,AddService, GetValidationMessages, LoginService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
