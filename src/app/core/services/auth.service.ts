import { Observable, of, switchMap, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

import { SystemUser, LoginCredentials, RegisterCredentials } from '@shomas/entities';
import { UserService } from '@shomas/services';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly userService: UserService) {
  }

  login(credentials: LoginCredentials): Observable<SystemUser> {
    return this.userService.findUserByEmail(credentials.email).pipe(
      switchMap((user: SystemUser) => user ? of(user).pipe(
        switchMap((user: SystemUser) => {
          if (user.password === credentials.password) {
            return of(user)
          }
          return throwError(() => new Error('Wrong email or password', { cause: 'Invalid credentials' }))
        })
      ) : throwError(() => new Error('Wrong email or password', { cause: 'Invalid credentials' })))
    );
  }

  register(credentials: RegisterCredentials): Observable<SystemUser>{
    return this.userService.findUserByEmail(credentials.email).pipe(
      switchMap((user: SystemUser) => user ? throwError(() => new Error('Register error', { cause: 'This user already exists' })) : this.userService.createUser(credentials)) 
    )
  }

  logout(): Observable<string> {
    return of('');
  }
}
