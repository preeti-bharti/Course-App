import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  getUser() {
    return this.http.get(`${environment.apiUrl}users/me`).pipe(map(response => { return response }));
  }
}
