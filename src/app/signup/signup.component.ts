import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {



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
