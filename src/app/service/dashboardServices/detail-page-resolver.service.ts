import { Injectable }             from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';
import { Observable, of, EMPTY }  from 'rxjs';
import { mergeMap, take }         from 'rxjs/operators';
import { DashboardService } from './dashboard.service';

@Injectable({
  providedIn: 'root'
})
export class DetailPageResolverService implements Resolve<any> {

  constructor(private DashSvc: DashboardService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let id = route.paramMap.get('id');
 
    //return this.DashSvc.getUserDetails(id);
    return this.DashSvc.getUserDetails(id).pipe(
      take(1),
      mergeMap((crisis:any) => {
       
        if (crisis.status == '$200') {
          return of(crisis);
        } else { // id not found
          this.router.navigate(['/']);
          return EMPTY;
        }
      })
    );
  }





}
