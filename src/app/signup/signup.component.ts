import { Component, OnInit, NgZone  } from '@angular/core';
import { AmChartsService, AmChart  } from "@amcharts/amcharts3-angular";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import {NgbPaginationModule, NgbAlertModule, NgbModal, ModalDismissReasons, NgbDateStruct, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  closeResult: string;
  myDate: any;
  private chart: am4charts.PieChart;
  constructor(private zone: NgZone, private modalService: NgbModal, private ngbDateParserFormatter: NgbDateParserFormatter) { }

  ngOnInit() {}



  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv", am4charts.PieChart);

      chart.paddingRight = 20;

      
      chart.data = [{
        "country": "Lithuania",
        "litres": 501.9
      }, {
        "country": "Czech Republic",
        "litres": 301.9
      }, {
        "country": "Ireland",
        "litres": 201.1
      }, {
        "country": "Germany",
        "litres": 165.8
      }, {
        "country": "Australia",
        "litres": 139.9
      }, {
        "country": "Austria",
        "litres": 128.3
      }, {
        "country": "UK",
        "litres": 99
      }, {
        "country": "Belgium",
        "litres": 60
      }, {
        "country": "The Netherlands",
        "litres": 50
      }];

     

      // Add and configure Series
let pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
pieSeries.innerRadius = am4core.percent(50);
pieSeries.ticks.template.disabled = true;
pieSeries.labels.template.disabled = true;

let rgm = new am4core.RadialGradientModifier();
rgm.brightnesses.push(-0.8, -0.8, -0.5, 0, - 0.5);
pieSeries.slices.template.fillModifier = rgm;
pieSeries.slices.template.strokeModifier = rgm;
pieSeries.slices.template.strokeOpacity = 0.4;
pieSeries.slices.template.strokeWidth = 0;

chart.legend = new am4charts.Legend();
chart.legend.position = "right";

      this.chart = chart;
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }















  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //     this.myDate = this.ngbDateParserFormatter.format(this.myDate);
      
  //     console.log(this.myDate);
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
      
  //     return  `with: ${reason}`;
  //   }
  // }

  //  video: any = document.getElementById("myVideo");
  //  btn = document.getElementById("myBtn");
  
  //  myFunction() {
  //   if (this.video.paused) {
  //     this.video.play();
  //     this.btn.innerHTML = "Pause";
  //   } else {
  //     this.video.pause();
  //     this.btn.innerHTML = "Play";
  //   }
  // }





}
