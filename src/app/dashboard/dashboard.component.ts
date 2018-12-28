import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Route, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, Subscriber, empty, EMPTY } from 'rxjs';
import { DashboardService } from '../service/dashboard/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route: Route) { }

  ngOnInit() {
    this.route.data
    .subscribe((data:any ) => {
      console.log("Get User Details", data);  
    });
  }

logout(){
  localStorage.removeItem('currentUSer');
  window.location.reload();
}


}
