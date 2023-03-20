import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AuthStateFacade } from '../store/auth.facade';

@Injectable({
  providedIn: 'root'
})
export class NotAuthorizedGuard implements CanActivate {
  isAuthorized = false;
  constructor(private authService: AuthStateFacade, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.authService.isAuthorized$.subscribe((data :boolean)=> {this.isAuthorized = data});
    if(!this.isAuthorized){
      return true;
    }
    else{
      this.router.navigate(['/courses']);
      return false;
    }
  }

}
