import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, map, Observable, observable } from 'rxjs';
import { SessionStorageService } from './session-storage.service';
import { Router } from '@angular/router';
export interface UserModel {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthorized$$ = new BehaviorSubject(false);
  public isAuthorized$ = this.isAuthorized$$.asObservable();
  constructor(private http: HttpClient, private sessionStorage: SessionStorageService,
    private router: Router) {
    if (this.sessionStorage.getToken() != '') {
      this.isAuthorized$$.next(true);
    }
  }
  login(loginDetails: UserModel) {
    return this.http.post(`${environment.apiUrl}login`, loginDetails).pipe(map((response: any) => {
      this.isAuthorized$$.next(true);
      this.sessionStorage.setToken(response.result);
      return response;
    }));
  }
  Register(registrationDetails: UserModel) {
    return this.http.post(`${environment.apiUrl}register`, registrationDetails).pipe(map(response => { return response }));
  }
  logout() {
    this.router.navigate(['/login']);
    return this.http.delete(`${environment.apiUrl}logout`).pipe(map(response => { return response }));
  }

}
