import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getFromStorage(key: string){
    return window.localStorage.getItem(key);
  }

  //Save data to local storage. Accepts json object as data
  saveToStorage(key: string, data: any){
    window.localStorage.setItem(key, JSON.stringify(data));
  }
}
