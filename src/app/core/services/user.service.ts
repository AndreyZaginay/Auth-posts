import { Injectable } from '@angular/core';
import { AngularFirestore, QueryFn } from '@angular/fire/compat/firestore';
import { Observable, of, switchMap, map, from, EMPTY, take } from 'rxjs';

import { CollectionUser, RegisterCredentials, SystemUser } from "@shomas/entities";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly userCollection = (queryFn?: QueryFn) => this.firestore.collection<CollectionUser>('users', queryFn);

  constructor(private readonly firestore: AngularFirestore) {
  }

  findUserByEmail(userEmail: string): Observable<SystemUser | undefined> {
    return this.userCollection(ref => ref.where('email', '==', userEmail)).valueChanges({ idField: 'id' }).pipe(
      take(1),
      map((users: SystemUser[]) => users[0])
    );
  }

  findUserById(userId: string): Observable<SystemUser> {
    return this.userCollection().doc(userId).valueChanges({ idField: 'id' }).pipe(
      switchMap((user: SystemUser | undefined) => user ? of(user) : EMPTY)
    );
  }

  createUser(createUserDto: RegisterCredentials): Observable<SystemUser> {
    return from(this.userCollection().add(createUserDto)).pipe(
      map(({ id }) => ({ id, ...createUserDto }))
    );
  }
}
