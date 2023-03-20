import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserStoreService } from '../services/user-store.service';
import { UserFacade } from '../store/user.facade';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private userStoreService : UserFacade,
    private router : Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.userStoreService.isAdmin$.pipe(map(response => {return response}))){
      return true;
    }
    else{
      this.router.navigate(['/courses']);
      return false;
    }
  }
  
}
