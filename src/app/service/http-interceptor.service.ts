import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = JSON.parse(localStorage.getItem('currentUSer'));
        if (currentUser != null) {
            request = request.clone({
                setHeaders: { 
                    h5cAuthToken:  currentUser.httpHeaders.h5cAuthToken
                }

            });
        }

        return next.handle(request);
    }
}
