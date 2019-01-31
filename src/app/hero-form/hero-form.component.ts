import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { DashboardService } from '../service/dashboardServices/dashboard.service';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  dataobj:any;
  name: any;
  constructor(private dashSvc: DashboardService) { }

  ngOnInit() {
  }
  powers = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];

  model = new Hero(18, '', '', '');
  
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.dataobj = this.model;
    console.log(this.dataobj);
    //this.dashSvc.testService(this.model);
  }
  
}
