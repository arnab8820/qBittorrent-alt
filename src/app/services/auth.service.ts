import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service'
import {Auth} from '../urls';
import { ReplaySubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginStatus: ReplaySubject<boolean> = new ReplaySubject(1);
  sub = this.loginStatus.subscribe(val=>{
    console.log("value changed: ", val);
    if(!val){
      
    }
  })

  constructor(private api: ApiServiceService, private router: Router) { }

  login(apiInfo: any, reqBody: any){
    return this.api.postData(apiInfo.url, reqBody, apiInfo.options);
  }

  logout(apiInfo: any){
    return this.api.getData(apiInfo.url, apiInfo.options);
  }

  isLoggedIn(){
    return new Promise<boolean>((resolve, reject)=>{
      this.api.getData(Auth.isLoggedIn.url, Auth.isLoggedIn.options).subscribe((data: any)=>{
        if(data.status===200){
          resolve(true);
          this.loginStatus.next(true);
        } else {
          resolve(false);
          this.loginStatus.next(false);
        }
      })
    })
  }
}

