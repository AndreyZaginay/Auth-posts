import { Injectable } from '@angular/core';
import { 
  CollectionReference,
  DocumentData,
  collection, 
  Firestore, 
  collectionData, 
  doc, 
  docData, 
  DocumentReference, 
  addDoc, 
  updateDoc, 
  deleteDoc 
} from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';

import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  postsCollection: CollectionReference<DocumentData> = collection(this.firestore, 'posts');

  constructor(private readonly firestore: Firestore ) {}

  getAll(): Observable<Post[]>{
    return collectionData(this.postsCollection, {
      idField: 'id',
    }) as Observable<Post[]>
  }

  getOne(id: string): Observable<Post> {
    const postDocumentReference = doc(this.firestore, `posts/${id}`);
    return docData(postDocumentReference, { idField: 'id' }) as Observable<Post>; 
  }

  create(post: Post): Observable<DocumentReference<DocumentData>> {
    return from(addDoc(this.postsCollection, post)) 
  }

  update(post: Post): Observable<void> {
    const postDocumentReference = doc(this.firestore, `posts/${post.id}`);
    return from(updateDoc(postDocumentReference, { ...post }));
  }

 delete(id: string): Observable<void> {
    const postDocumentReference = doc(this.firestore, `posts/${id}`);
    return from(deleteDoc(postDocumentReference));
  }

}
