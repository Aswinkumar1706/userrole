import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  get(key: string){
    var data = sessionStorage.getItem(key)|| "";
    return JSON.parse(data);
  };
  set(key: string,data: any){
     sessionStorage.setItem(key,JSON.stringify(data));
  }
}
