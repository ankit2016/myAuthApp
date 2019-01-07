import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './auth.guard';
import { DetailComponent } from './dashboard/detail/detail.component';
import { ListUserComponent } from './dashboard/list-user/list-user.component';
import { DetailPageResolverService } from './service/dashboardServices/detail-page-resolver.service'

const routes: Routes = [
  {
    path: "", component: DashboardComponent, canActivate:[AuthGuard],
    children: [
      {path: "", component: ListUserComponent, canActivate:[AuthGuard]},
      {path: "detail/:id", component: DetailComponent, canActivate:[AuthGuard], resolve: {myUserData: DetailPageResolverService}}
    ]
  },
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignupComponent},
  {path: "**", component: PagenotfoundComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
