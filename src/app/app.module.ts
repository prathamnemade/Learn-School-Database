import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
  imports: [
    BrowserModule,BrowserAnimationsModule,ReactiveFormsModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
