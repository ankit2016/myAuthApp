import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Route, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, Subscriber, empty, EMPTY } from 'rxjs';
import { DashboardService } from './dashboard.service';



@Injectable({
  providedIn: 'root'
})

export class DashBoardResolver  implements Resolve<any>{

  constructor(private dashboardService: DashboardService, private route: Router) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {

    this.dashboardService.getUsers().subscribe((res:any) => {
        if(res.data.status == '$200'){
          return res;
        }else {
          this.route.navigate(['/login']);
          return EMPTY;
        }
    })
    
  }
}

