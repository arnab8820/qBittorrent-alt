import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private api:ApiServiceService) { }

  testCall(){
    this.api.getData("/app/version").subscribe(data=>{
      console.log(data);
    })
  }
}
