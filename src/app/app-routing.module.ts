import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import { DashBoardResolver } from './service/dashboard/dashboard-resolver.service';
const routes: Routes = [
  {path: "", component: DashboardComponent, pathMatch:"full", canActivate:[AuthGuard], resolve: {DashBoardResolver}},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "**", component: LoginComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
