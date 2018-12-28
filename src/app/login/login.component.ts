import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
 
  status: any;
  constructor(private LoginService: AuthService, private route: Router) { }

  ngOnInit() {
  }

  login(){
    this.LoginService.getAuth(this.username, this.password).subscribe((res :any)=>{
      console.log("login responce", res);
      if(res.status == '$200'){
        this.route.navigate(['/singup']);
      
      }else if (res.status == '$600'){
        alert("Incorrect username/passowrd");
      }else {
        alert("Login Failed");
      }
      
      
    }, error =>{
      console.log("error", error);
      alert("Login Failed");
    })
  }

  getUser(){
    this.LoginService.isLogedIn().subscribe((res:any) => {
      console.log(res);
    })
  }

}
