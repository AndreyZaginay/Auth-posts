import { Injectable } from '@angular/core';
import { AngularFirestore, QueryFn } from '@angular/fire/compat/firestore';
import {  Observable, of, switchMap, map, from, tap } from 'rxjs';

import { User } from '../state/interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly userCollection = (queryFn?: QueryFn) => this.firestore.collection<User>('users', queryFn);

  constructor(private readonly firestore: AngularFirestore) {}

  findOneByEmail(email: string): Observable<User> {
    return this.userCollection(ref => ref.where('email', '==', email)).valueChanges().pipe(
      map((users: User[]) => users[0])
    );
  }
  

  post(creditionals: User){
    // return this.getAll().pipe(
    //   switchMap((users: User[]) => {
    //     const user = users.find(user => user.email === creditionals.email);
    //     if (!user) {
    //       return from(addDoc(this.usersCollection, creditionals));
    //     }
    //     return of('user already exist')
    //   })
    // )
    // return from(addDoc(this.usersCollection, creditionals)).pipe(
    //   map(result => result.id)
    // );

    // this.userCollection.add(creditionals)
  }


}
