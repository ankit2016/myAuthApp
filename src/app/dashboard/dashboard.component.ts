import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboardServices/dashboard.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listArray : any;
  constructor(private dashboardsvs: DashboardService, private route: Router, private authSvc: AuthService) { }

  ngOnInit() {


  }

  logMeout = function(){
    this.authSvc.logout();
  }
  
  
}
