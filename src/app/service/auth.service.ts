import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})



export class AuthService {
  
  data: object;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http: HttpClient) { }
 
  getAuth(username: string, pass: string){

    this.data = {userName: username, password: pass};
     return this.http.post("https://smartklinic.com/kmf-services/authenticate/login", this.data, this.httpOptions)
     .pipe(map((res: any) =>{
       
        if(res.status == '$200'){
          
          console.log("from service", res);
          localStorage.setItem('currentUSer', JSON.stringify(res));
        }
        return res;
     }));

  }

  isLogedIn(){
   
    var user = JSON.parse(localStorage.getItem('currentUSer'));
    console.log("get user", user); 
    return user;
    
    
  }

}
