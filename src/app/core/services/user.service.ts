import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, CollectionReference, DocumentData, DocumentReference, Firestore } from '@angular/fire/firestore';
import {  from, Observable, of, switchMap } from 'rxjs';

import { User } from '../state/interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersCollection: CollectionReference<DocumentData> = collection(this.firestore, 'users');

  constructor(private readonly firestore: Firestore) { }

    
  getAll(): Observable<User[]> {
    return collectionData(this.usersCollection, { idField: 'id'}) as Observable<User[]>
  }

  post(creditionals: User): Observable<DocumentReference<DocumentData> | string> {
    return this.getAll().pipe(
      switchMap((users: User[]) => {
        const user = users.find(user => user.email === creditionals.email);
        if (!user) {
          return from(addDoc(this.usersCollection, creditionals));
        }
        return of('user already exist')
      })
    )
  }

  findUserByemail(creditionals: User): Observable<User | string> {
    return this.getAll().pipe(
      switchMap((users: User[]) => {
        const user = users.find(user => user.email === creditionals.email);
        if(!user) {
          return of('user does not exist')
        }
        if(user.password !== creditionals.password) {
          return of('wrong pass')
        }
        return of(user)
      })
    )
  }
}
