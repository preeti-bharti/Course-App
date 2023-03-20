import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http : HttpClient) { }
  getAll(){
    return this.http.get(`${environment.apiUrl}authors/all`).pipe(map((response : any) => { return response.result }));
  }
  addAuthor(nameObj : any){
    return this.http.post(`${environment.apiUrl}authors/add`,nameObj).pipe(map((response : any) => { return response.result }));
  }
}
