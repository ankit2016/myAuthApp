import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  user = JSON.parse(localStorage.getItem('currentUSer'));

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'h5cAuthToken':  this.user.httpHeaders.h5cAuthToken
    })
  };
  ngonInit(){

  }
  getList(){
    return this.http.get("https://smartklinic.com/kmf-services/provider/listByPartner/"+this.user.httpHeaders.partnerId +"/0");
  }

  getUserDetails(id){
    return this.http.get("https://smartklinic.com/kmf-services/provider/fetch/"+ id);
  }


}