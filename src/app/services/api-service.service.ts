import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private baseUrl:string|null = null;

  constructor(private http: HttpClient) { }

  setBaseUrl(url: string){
    this.baseUrl = url;
  }

  getData(url:string, options?:any){
    if(this.baseUrl!==null){
      return this.http.get(this.baseUrl+url, options);
    }
    
  }

  postData(url:string, body: any, headers?:any){
    if(this.baseUrl!==null){
      if(headers){
        return this.http.post(this.baseUrl+url, body, headers);
      } else {
        return this.http.post(this.baseUrl+url, body);
      }
    }
  }
}
