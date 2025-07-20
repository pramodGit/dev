import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.auth.getToken();

    let authReq = req;
    if (token) {
      authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
    }

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (!navigator.onLine) {
          // Handle offline error here
          console.error('No Internet Connection');
          // You can add custom offline handling here (e.g., show a message)
        } else if (error.status === 503) {
          // Handle Service Unavailable error here
          console.error('Service Unavailable');
          // You can add retry logic or notify user accordingly
        }
        // Rethrow the error so other error handlers can catch it
        return throwError(() => error);
      })
    );
  }
}
