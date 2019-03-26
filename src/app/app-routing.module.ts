import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainScreenComponent } from "./main-screen/main-screen.component";
import { RegisterComponent } from "./main-screen/register/register.component";
import { ViewComponent } from './sub-main/view/view.component';
import { AddComponent } from './sub-main/add/add.component';
import { SubMainComponent } from './sub-main/sub-main.component';
const appRoutes: Routes = [
  {
    path: "home",
    component: MainScreenComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "dashboard",
    component: SubMainComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}