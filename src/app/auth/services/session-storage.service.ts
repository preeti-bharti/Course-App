import { Injectable,Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor(@Inject('Window') window: Window) { }
  setToken(token: string){
    sessionStorage.setItem("token",token);
  }
  getToken(){
    return sessionStorage.getItem("token") ?? '';
  }
  deleteToken(){
    sessionStorage.removeItem("token");
  }
}
