import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboardServices/dashboard.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listArray : any;
  constructor(private dashboardsvs: DashboardService, private route: Router) { }

  ngOnInit() {
    this.dashboardsvs.getList().subscribe((res: any) =>{
      console.log('Got Coach List', res);
      this.listArray = res.results;
    }, (error: any) =>{
      console.log("Error", error);
      if(error.status == 403){
        this.route.navigate(['/login']);
      }
    })

  }
  
  
}
