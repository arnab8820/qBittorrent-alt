import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from './services/api-service.service';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/local-storage.service';
import { Auth } from './urls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'qbittorrent-alt';
  loggedIn: boolean = false;
  sub: any;

  constructor(
    private storage:LocalStorageService, 
    private router:Router, 
    private apiService: ApiServiceService,
    private auth: AuthService){}

  ngOnInit(): void {
    if(!this.storage.getFromStorage("appConfig")){
      this.router.navigate(['/initial-setup']);
    }
    const appConfig = JSON.parse(this.storage.getFromStorage("appConfig"));
    if(appConfig&&appConfig.apiUrl){
      this.apiService.setBaseUrl(appConfig.apiUrl);
    }

    this.sub = this.auth.loginStatus.subscribe(val=>{
      if(val){
        this.loggedIn = true;
      } else {
        this.loggedIn=false;
        this.router.navigate(['/login']);
      }
    })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }

  handleLogout(ev: string){
    if(ev){
      this.auth.logout(Auth.logout).subscribe((data: any)=>{
        if(data.status===200){
          console.log("Logged out. Redirecting");
          this.router.navigate(['/login']);
        }
      })
    }
  }
}
