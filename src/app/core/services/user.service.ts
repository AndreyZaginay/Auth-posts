import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, QueryFn, DocumentReference } from '@angular/fire/compat/firestore';

import { Observable, of, switchMap, map, from, tap, EMPTY } from 'rxjs';
import { SystemUser } from "../entities/system-user";
import { RegisterCredentials } from "../entities/reigster-credentials";
import { CollectionUser } from "../entities/collection-user";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly userCollection = (queryFn?: QueryFn) => this.firestore.collection<CollectionUser>('users', queryFn);

  constructor(private readonly firestore: AngularFirestore) {
  }

  findUserByEmail(userEmail: string): Observable<SystemUser> {
    // return this.userCollection(ref => ref.where('email', '==', email)).snapshotChanges().pipe(
    //   map((users: DocumentChangeAction<SystemUser>[]) => users[0])
    //   // map(user => {
    //   //   const id = user.payload.doc.id;
    //   //   const data = user.payload.doc.data();
    //   //   return { id, ...data };
    //   // })
    // )
    return this.userCollection(ref => ref.where('email', '==', userEmail)).valueChanges({ idField: 'id' }).pipe(
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
