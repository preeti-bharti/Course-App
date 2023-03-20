import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private isAdmin$$ = new BehaviorSubject(false);
  private name$$ = new BehaviorSubject('');
  public isAdmin$ = this.isAdmin$$.asObservable();
  public name$ = this.name$$.asObservable();
  constructor(private userService  : UserService) {
    this.getUser();
   }
  getUser(){
    this.userService.getUser().subscribe((data:any)=>{
      this.name$$.next(data.result.name);
      if(data.result.role == 'user'){
        this.isAdmin$$.next(false);
      }
      else{
        this.isAdmin$$.next(true);
      }
    })
  }
}
