import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';

import { selectLoggedIn } from 'src/app/core/state/selectors/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
 
  constructor(private readonly store: Store, private readonly router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.store.select(selectLoggedIn).pipe(
        tap(loggedIn => {
          if (!loggedIn) {
            this.router.navigate(['dashboard']);
          }
        })
      );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.store.select(selectLoggedIn).pipe(
        tap(loggedIn => {
          if (!loggedIn) {
            this.router.navigate(['dashboard']);
          }
        })
      );
  }
}
