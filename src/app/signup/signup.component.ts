import { Component, OnInit, NgZone } from '@angular/core';
import { AmChartsService, AmChart } from "@amcharts/amcharts3-angular";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { NgbPaginationModule, NgbAlertModule, NgbModal, ModalDismissReasons, NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { interval } from 'rxjs';
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  closeResult: string;
  myDate: any;
  private chartDonutGraph: am4charts.PieChart;
  counter: number = 0;
  hitnane: any; 
  constructor(private zone: NgZone, private modalService: NgbModal, private ngbDateParserFormatter: NgbDateParserFormatter) { }

  ngOnInit() {
  this.hitnane =  setInterval(() => {
    this.counter = Math.floor((Math.random() * 100) + 1);
  }, 500);
   }
   ngOnDestroy() { 
    clearInterval(this.hitnane); 
  }



  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      let chartDonut = am4core.create("chartdivDonut", am4charts.PieChart);

      chartDonut.paddingRight = 20;


      chartDonut.data = [{
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
      let pieSeries = chartDonut.series.push(new am4charts.PieSeries());
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

      chartDonut.legend = new am4charts.Legend();
      chartDonut.legend.position = "right";

      this.chartDonutGraph = chartDonut;
      //-------------------- Meter chart-------------------- 
      let chart = am4core.create("chartdiv", am4charts.GaugeChart);
      chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

      chart.innerRadius = -25;

      let axis = chart.xAxes.push(new am4charts.ValueAxis() as any);
      axis.min = 0;
      axis.max = 100;
      axis.strictMinMax = true;
      axis.renderer.grid.template.stroke = new am4core.InterfaceColorSet().getFor("background");
      axis.renderer.grid.template.strokeOpacity = 0.3;

      let colorSet = new am4core.ColorSet();

      let range0 = axis.axisRanges.create();
      range0.value = 0;
      range0.endValue = 50;
      range0.axisFill.fillOpacity = 1;
      range0.axisFill.fill = colorSet.getIndex(0);
      range0.axisFill.zIndex = - 1;

      let range1 = axis.axisRanges.create();
      range1.value = 50;
      range1.endValue = 80;
      range1.axisFill.fillOpacity = 1;
      range1.axisFill.fill = colorSet.getIndex(2);
      range1.axisFill.zIndex = -1;

      let range2 = axis.axisRanges.create();
      range2.value = 80;
      range2.endValue = 100;
      range2.axisFill.fillOpacity = 1;
      range2.axisFill.fill = colorSet.getIndex(4);
      range2.axisFill.zIndex = -1;

      let hand = chart.hands.push(new am4charts.ClockHand());

      // using chart.setTimeout method as the timeout will be disposed together with a chart
      chart.setTimeout(randomValue, 2000);
      function randomValue() {
        hand.showValue(Math.random() * 100, 1000, am4core.ease.cubicOut);
        chart.setTimeout(randomValue, 5000);
      }

      //-----------------Watch----------------------------
      // Create chart instance
      let chartThree = am4core.create("chartdivPie", am4charts.XYChart);


      // Add data
      chartThree.data = [{
        "year": "2016",
        "europe": 2.5,
        "namerica": 2.5,
        "asia": 2.1,
        "lamerica": 0.3,
        "meast": 0.2,
        "africa": 0.1
      }, {
        "year": "2017",
        "europe": 2.6,
        "namerica": 2.7,
        "asia": 2.2,
        "lamerica": 0.3,
        "meast": 0.3,
        "africa": 0.1
      }, {
        "year": "2018",
        "europe": 2.8,
        "namerica": 2.9,
        "asia": 2.4,
        "lamerica": 0.3,
        "meast": 0.3,
        "africa": 0.1
      }];

      // Create axes
      let categoryAxistwo = chartThree.xAxes.push(new am4charts.CategoryAxis());
      categoryAxistwo.dataFields.category = "year";
      categoryAxistwo.renderer.grid.template.location = 0;


      let valueAxistwo = chartThree.yAxes.push(new am4charts.ValueAxis());
      valueAxistwo.renderer.inside = true;
      valueAxistwo.renderer.labels.template.disabled = true;
      valueAxistwo.min = 0;

      // Create series
      function createSeries(field, name) {
        
        // Set up series
        let series = chartThree.series.push(new am4charts.ColumnSeries());
        series.name = name;
        series.dataFields.valueY = field;
        series.dataFields.categoryX = "year";
        series.sequencedInterpolation = true;
        
        // Make it stacked
        series.stacked = true;
        
        // Configure columns
        series.columns.template.width = am4core.percent(60);
        series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";
        
        // Add label
        let labelBullet = series.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.text = "{valueY}";
        labelBullet.locationY = 0.5;
        
        return series;
      }

      createSeries("europe", "Europe");
      createSeries("namerica", "North America");
      createSeries("asia", "Asia-Pacific");
      createSeries("lamerica", "Latin America");
      createSeries("meast", "Middle-East");
      createSeries("africa", "Africa");

      // Legend
      chartThree.legend = new am4charts.Legend();
      //-----------------------------------------------------------------------------------



      let chartXYZ = am4core.create("chartdivXYZ", am4charts.XYChart);
      chartXYZ.hiddenState.properties.opacity = 0; // this creates initial fade-in

      chartXYZ.data = [
        {
          country: "USA",
          visits: 23725
        },
        {
          country: "China",
          visits: 1882
        },
        {
          country: "Japan",
          visits: 1809
        },
        {
          country: "Germany",
          visits: 1322
        },
        {
          country: "UK",
          visits: 1122
        },
        {
          country: "France",
          visits: 1114
        },
        {
          country: "India",
          visits: 984
        },
        {
          country: "Spain",
          visits: 711
        },
        {
          country: "Netherlands",
          visits: 665
        },
        {
          country: "Russia",
          visits: 580
        },
        {
          country: "South Korea",
          visits: 443
        },
        {
          country: "Canada",
          visits: 441
        }
      ];

      let categoryAxis = chartXYZ.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.dataFields.category = "country";

      let valueAxis = chartXYZ.yAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      valueAxis.max = 24000;
      valueAxis.strictMinMax = true;
      valueAxis.renderer.minGridDistance = 30;
      // axis break
      let axisBreak = valueAxis.axisBreaks.create();
      axisBreak.startValue = 2100;
      axisBreak.endValue = 22900;
      axisBreak.breakSize = 0.005;

      // make break expand on hover
      let hoverState = axisBreak.states.create("hover");
      hoverState.properties.breakSize = 1;
      hoverState.properties.opacity = 0.1;
      hoverState.transitionDuration = 1500;

      axisBreak.defaultState.transitionDuration = 1000;
      /*
      // this is exactly the same, but with events
      axisBreak.events.on("over", function() {
        axisBreak.animate(
          [{ property: "breakSize", to: 1 }, { property: "opacity", to: 0.1 }],
          1500,
          am4core.ease.sinOut
        );
      });
      axisBreak.events.on("out", function() {
        axisBreak.animate(
          [{ property: "breakSize", to: 0.005 }, { property: "opacity", to: 1 }],
          1000,
          am4core.ease.quadOut
        );
      });*/

      let series = chartXYZ.series.push(new am4charts.ColumnSeries());
      series.dataFields.categoryX = "country";
      series.dataFields.valueY = "visits";
      series.columns.template.tooltipText = "{valueY.value}";
      series.columns.template.tooltipY = 0;
      series.columns.template.strokeOpacity = 0;

      // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
      series.columns.template.adapter.add("fill", function(fill, target) {
        return chartXYZ.colors.getIndex(target.dataItem.index);
      });
    //-----------------End------------------------------- 
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
