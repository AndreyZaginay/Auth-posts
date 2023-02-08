import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { UserService } from './user.service';
import { User } from '../state/interfaces/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly userService: UserService) { }

  // login(creditionals: User): Observable<User | string> {
  //  return this.userService.findUserByemail(creditionals)
  // }

  // register(creditionals: User): Observable<User> {
  //   return this.userService.post(creditionals)
  // }



  logout(): Observable<string> {
    return of('');
  }

}
