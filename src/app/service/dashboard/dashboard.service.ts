import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  httpOptions: any;
  currentuser: any;
  constructor(private http: HttpClient, ) { }
  
  ngOnInit(): void {
    this.currentuser = JSON.parse(localStorage.getItem('currentUser'));
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'h5cAuthToken':  this.currentuser.httpHeaders.h5cAuthToken
      })
    };

  }
  getUsers(){
   return this.http.get<any>('https://smartklinic.com/kmf-services/partnerUser/read/1', this.httpOptions);
  }


}
