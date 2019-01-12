import { Component, OnInit } from '@angular/core';
import {NgbPaginationModule, NgbAlertModule, NgbModal, ModalDismissReasons, NgbDateStruct, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  closeResult: string;
  myDate: any;
  tochildData: any = "From Parent To Child";
  constructor(private modalService: NgbModal, private ngbDateParserFormatter: NgbDateParserFormatter) { }

  ngOnInit() {}
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.myDate = this.ngbDateParserFormatter.format(this.myDate);
      
      console.log(this.myDate);
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      
      return  `with: ${reason}`;
    }
  }

   video: any = document.getElementById("myVideo");
   btn = document.getElementById("myBtn");
  
   myFunction() {
    if (this.video.paused) {
      this.video.play();
      this.btn.innerHTML = "Pause";
    } else {
      this.video.pause();
      this.btn.innerHTML = "Play";
    }
  }





}
