import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formData:any = {
    username: "",
    password: ""
  }

  constructor(private api:ApiServiceService) { }

  ngOnInit(): void {
  }

  canSubmit(){
    return this.formData.username!==""&&this.formData.password!=="";
  }

  handleLogin(){
    const reqBody = new HttpParams().set("username", this.formData.username).set("password", this.formData.password);

    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/x-www-form-urlencoded');
    this.api.postData("/auth/login", reqBody, {headers: headers}).subscribe(data=>{
      console.log(data);
    })
  }

}
