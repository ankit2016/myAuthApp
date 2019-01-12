import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() data: any;

  @Output() outData: any = new EventEmitter();
  constructor() { }

  ngOnInit() {
    //alert('Data form parent:'+ this.data);
this.outData.emit("From child to parent");

  }

}
