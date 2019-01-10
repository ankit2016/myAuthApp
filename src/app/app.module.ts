import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatTabsModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthInterceptor } from './service/http-interceptor.service';
import { MypipePipe } from './pipe/mypipe.pipe';
import { DetailComponent } from './dashboard/detail/detail.component';
import { ListUserComponent } from './dashboard/list-user/list-user.component';
import { DetailPageResolverService } from './service/dashboardServices/detail-page-resolver.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TestPipe } from './pipe/test.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    PagenotfoundComponent,
    MypipePipe,
    DetailComponent,
    ListUserComponent,
    TestPipe,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatTabsModule,
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    DetailPageResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
