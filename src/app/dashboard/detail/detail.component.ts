import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DashboardService } from 'src/app/service/dashboardServices/dashboard.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  userData: any;
  userData1 :any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private Dashsvc: DashboardService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    

    var mydata = this.route.snapshot.data;
    console.log("resolve data", mydata.myUserData);
    this.userData = mydata.myUserData.singleResult;


    
  }

}
