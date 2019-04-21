import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(public auth: AuthService, private router: Router) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
            // return event;
            // if (event instanceof HttpResponse) {
            //     return event.clone({
            //         body: JSON.parse(event.body),
            //       });
            // }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {                
                if (err.status === 401) {                    
                    // redirect to the login route
                    this.router.navigateByUrl('/login');
                }
            }
        }));
    }
}