import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Auth } from '../urls';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formData:any = {
    username: "",
    password: ""
  };
  errorText:string = "";

  constructor(private router: Router, private auth: AuthService) { }

  async ngOnInit(): Promise<void> {
    if(await this.auth.isLoggedIn()){
      console.log("already logged in");
      this.router.navigate(['/']);
    }
  }

  canSubmit(){
    return this.formData.username!==""&&this.formData.password!=="";
  }

  handleLogin(){
    const reqBody = new HttpParams().set("username", this.formData.username).set("password", this.formData.password);

    this.auth.login(Auth.login, reqBody).subscribe((data:any)=>{
      if(data&&data.status===200&&data.body==="Ok."){
        console.log("Logged In, Redirecting...");
        this.router.navigate(['/']);
      } else if(data&&data.status===200&&data.body==="Fails."){
        console.log("Invalid data");
        this.errorText = "Invalid credentials!"
      } else {
        this.errorText = "Unable to reach server!"
      }
    })
  }

}
