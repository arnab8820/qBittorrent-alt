import { HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptorService {

  constructor(private router: Router) { }

  intercept(req:HttpRequest<any>, next: HttpHandler){
    return next.handle(req).pipe(
      catchError((error)=>{
        console.error('API error occured::::', error.message);
        if (error.status === 401 || error.status === 403 || error.status === 0){
          console.log("SESSION EXPIRED >>>>");
          this.router.navigate(['/login']);
        }
        return throwError(error);
      })
    )
  }
}
