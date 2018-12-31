import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../service/dashboardServices/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  listArray : any;
  constructor(private dashboardsvs: DashboardService) { }

  ngOnInit() {
    this.dashboardsvs.getList().subscribe((res: any) =>{
      console.log('Got Coach List', res);
      this.listArray = res.results;
    })

  }
  
  
}
