import { iif, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

import { SystemUser, LoginCredentials } from '@shomas/entities';
import { UserService } from '@shomas/services';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly userService: UserService) {
  }

  login(credentials: LoginCredentials): Observable<SystemUser> {
    return this.userService.findUserByEmail(credentials.email).pipe(
      switchMap((user: SystemUser) => user ? of(user) : throwError(() => new Error('Wrong email or password', { cause: 'Invalid credentials' })))
    );
  }

  // register(credentials: RegisterCredentials): Observable<SystemUser>{
  //   return this.userService.findOneByEmail(credentials.email).pipe(
  //     switchMap(user => {
  //       if (user) {
  //         return throwError(() => of(new Error('register error')));
  //       }
  //     return this.userService.post({...credentials});
  //     })
  //   )
  // }

  logout(): Observable<string> {
    return of('');
  }
}
