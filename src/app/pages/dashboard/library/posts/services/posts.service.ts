import { EMPTY, map, Observable, of, switchMap, from } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFirestore, QueryFn } from '@angular/fire/compat/firestore';

import { BasePost, CollectionPost, SystemPost } from '../entities';

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
    return from(this.postsCollection().doc(postId).delete()).pipe(
      map(() => postId)
    )

  }

  createPost(createPostDto: BasePost): Observable<SystemPost> {
    return from(this.postsCollection().add(createPostDto)).pipe(
      map(({ id }) => ({ id, ...createPostDto }))
    );
  }
}
