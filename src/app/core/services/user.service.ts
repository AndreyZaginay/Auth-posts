import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChangeAction, QueryFn } from '@angular/fire/compat/firestore';

import {  Observable, of, switchMap, map, from, tap } from 'rxjs';

import { User } from '../state/interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly userCollection = (queryFn?: QueryFn) => this.firestore.collection<User>('users', queryFn);

  constructor(private readonly firestore: AngularFirestore) {}

  findOneByEmail(email: string): Observable<User> {
    return this.userCollection(ref => ref.where('email', '==', email)).snapshotChanges().pipe(
      map((users: DocumentChangeAction<User>[]) => users[0]),
      map(user => {
        const id = user.payload.doc.id;
        const data = user.payload.doc.data();
        return { id, ...data }
      })
    )
  }

  post(credentials: User){
   return from(this.userCollection().add(credentials)).pipe(
      map(data => data.id)
    )
  }
}
