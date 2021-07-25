import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-init-setup',
  templateUrl: './init-setup.component.html',
  styleUrls: ['./init-setup.component.scss']
})
export class InitSetupComponent implements OnInit {

  formData:any = {
    hostUrl: "",
    apiUrl: ""
  };
  constructor(private storage:LocalStorageService, private router: Router) { }

  ngOnInit(): void {
  }

  handleHostUrl(){
    this.formData.apiUrl = this.formData.hostUrl + "/api/v2";
  }

  canSubmit(){
    return this.formData.hostUrl!=="" && this.formData.apiUrl!=="";
  }

  handleSubmit(){
    const data = {
      apiUrl: this.formData.apiUrl
    }
    this.storage.saveToStorage("appConfig", data);
    this.router.navigate(['/']);
  }
}
