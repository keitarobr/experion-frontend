import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.url.endsWith("auth/signin")) {
      console.log("Adding token");
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.getToken()}`
        }
      });
    } else {
      console.log("No token added for " + request.url);
    }

    return next.handle(request);
  }
}
