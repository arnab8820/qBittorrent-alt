import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService {

  constructor(private auth: AuthService) { }

  intercept(req:HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
    const reqEp = req.url.split('/');
   
    req = req.clone({
      withCredentials: true
    });
    // console.log("outgoing request: ", req);
    
    return next.handle(req)
    .pipe(
      catchError((error)=>{
        if (error.status === 401 || error.status === 403 || error.status === 0){
          console.log("session expired!");
          this.auth.loginStatus.next(false);
        }
        return throwError(error);
      })
    )
  }
}
