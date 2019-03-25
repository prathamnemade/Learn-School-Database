import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainScreenComponent } from "./main-screen/main-screen.component";
import { RegisterComponent } from "./main-screen/register/register.component";

const appRoutes: Routes = [
  {
    path: "home",
    component: MainScreenComponent
  },
  {
    path: "register",
    component: RegisterComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}