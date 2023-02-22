import { SystemPost } from './../entities/system-post';
import { EMPTY, from, map, Observable, of, switchMap } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, QueryFn } from '@angular/fire/compat/firestore';

import { BasePost, CollectionPost } from '../entities';



@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private readonly postsCollection = (queryFn?: QueryFn) => this.firestore.collection<CollectionPost>('posts', queryFn);

  constructor(private readonly firestore: AngularFirestore ) {}

  getPosts(): Observable<SystemPost[]> {
    return this.postsCollection().valueChanges({ idField: 'id' });
  }

  findPostById(postId: string): Observable<SystemPost> {
    return this.postsCollection().doc(postId).valueChanges({ idField: 'id' }).pipe(
      switchMap((post: SystemPost | undefined) => post ? of(post) : EMPTY)
    );
  }

  deletePost(postId: string): Observable<string> {
    this.postsCollection().doc(postId).delete();
    return of(`Post with id ${ postId } was deleted`);
  }

  createPost(createPostDto: BasePost): Observable<SystemPost> {
    return from(this.postsCollection().add(createPostDto)).pipe(
      map(({ id }) => ({ id, ...createPostDto }))
    );
  }
}
