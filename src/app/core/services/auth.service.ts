import {  iif, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

import { loginCredentials, registerCredentials } from './../state/interfaces/auth';
import { UserService } from './user.service';
import { User } from '../state/interfaces/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly userService: UserService) { }

  login(credentials: loginCredentials): Observable<User> {
   return this.userService.findOneByEmail(credentials.email).pipe(
    tap(user => console.log(user)),
    switchMap(user => iif(
      () => user && user.password === credentials.password,
      of(user),
      throwError(() => of(new Error('login error')))
      ))
   )
  }

  register(credentials: registerCredentials): Observable<User>{
    return this.userService.findOneByEmail(credentials.email).pipe(
      switchMap(user => {
        if (user) {
          return throwError(() => of(new Error('register error')));
        }
      return this.userService.post({...credentials});
      })
    )
  }



  logout(): Observable<string> {
    return of('');
  }

}
