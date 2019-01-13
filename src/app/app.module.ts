import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
//Angular Material
import {MatButtonModule, MatCheckboxModule, MatTabsModule, MatNativeDateModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';



import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthInterceptor } from './service/http-interceptor.service';
import { MypipePipe } from './pipe/mypipe.pipe';
import { DetailComponent } from './dashboard/detail/detail.component';
import { ListUserComponent } from './dashboard/list-user/list-user.component';
import { DetailPageResolverService } from './service/dashboardServices/detail-page-resolver.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestPipe } from './pipe/test.pipe';
import { TestComponent } from './test/test.component';
import { from } from 'rxjs';

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
    TestComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    AmChartsModule,
    
    //Angular Material
    MatButtonModule, 
    MatInputModule,
    MatCheckboxModule,
    MatTabsModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    DetailPageResolverService,
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
