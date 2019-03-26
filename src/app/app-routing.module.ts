import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainScreenComponent } from "./main-screen/main-screen.component";
import { RegisterComponent } from "./main-screen/register/register.component";
import { SubMainComponent } from './sub-main/sub-main.component';
import { AuthGuard } from "./auth.guard";
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
    component: SubMainComponent,canActivate: [AuthGuard]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}