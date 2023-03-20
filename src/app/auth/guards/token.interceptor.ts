import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SessionStorageService } from '../services/session-storage.service';
//import { AuthStateFacade } from '../store/auth.facade';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router,
    //private authService : AuthStateFacade,
    private sessionStorageService : SessionStorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // add auth header with jwt if account is logged in and request is to the api url
    const bearerToken = this.sessionStorageService.getToken();
    const isLoggedIn = bearerToken == "" ? false : true;
    if (isLoggedIn) {
      request = request.clone({
        setHeaders: { Authorization: bearerToken }
      });
    }
    return next.handle(request).
      pipe(catchError((error: HttpErrorResponse) => {
        if (error.status == 401) {
          this.sessionStorageService.deleteToken();
          alert("unauthorized user...login again");
          this.router.navigate(['login']);
        }
        return throwError(() => error.message);
      }))
  }
}
