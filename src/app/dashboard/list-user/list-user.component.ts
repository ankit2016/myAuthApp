import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../service/dashboardServices/dashboard.service';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})

export class ListUserComponent implements OnInit {
  listArray : any;
  userName  = "Ankit Kumar";
  constructor(private dashboardsvs: DashboardService, private route: Router, private authSvc: AuthService) { }

  ngOnInit() {
    this.dashboardsvs.getList().subscribe((res: any) =>{
      //console.log('Got Coach List', res);
      this.listArray = res.results;
      
    }, (error: any) =>{
      console.log("Error", error);
      if(error.status == 403){
        this.route.navigate(['/login']);
      }
    })

  }

  logMeout = function(){
    this.authSvc.logout();
  }
  getDetails(id){
    this.route.navigate(['detail', id]);  
  }
  
  
}