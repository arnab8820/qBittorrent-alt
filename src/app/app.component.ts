import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from './services/api-service.service';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'qbittorrent-alt';

  constructor(private storage:LocalStorageService, private router:Router, private apiService: ApiServiceService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(!this.storage.getFromStorage("appConfig")){
      this.router.navigate(['/initial-setup']);
    }
    const appConfig = JSON.parse(this.storage.getFromStorage("appConfig"));
    if(appConfig&&appConfig.apiUrl){
      this.apiService.setBaseUrl(appConfig.apiUrl);
    }
    // this.apiService.getData("/app/version").subscribe(data=>{
    //   console.log(data);
    // })
  }
}
