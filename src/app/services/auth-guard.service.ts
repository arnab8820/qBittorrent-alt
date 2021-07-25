import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { promise } from 'protractor';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private api:ApiServiceService) { }

  canActivate(){
    return new Promise<boolean>((resolve, reject)=>{
      this.api.getData("/app/version").subscribe(data=>{
        console.log(data);
        resolve(true);
      });
    });    
  }
}
