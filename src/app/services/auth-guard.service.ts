import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  logInStatus: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private auth: AuthService) { }

  canActivate(){
    return this.auth.isLoggedIn();
  }
}
