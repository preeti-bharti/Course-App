import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
//import { AuthStateFacade } from '../store/auth.facade';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanLoad {
  isAuthorized: any = false;
  constructor( private router: Router) { }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //this.authService.isAuthorized$.subscribe((data :boolean)=> {this.isAuthorized = data});
    if (this.isAuthorized) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}