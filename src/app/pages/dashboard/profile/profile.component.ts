import { Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';

import { SystemUser } from "@shomas/core";
import { selectUser, AuthActions } from "@shomas/state";
import { SystemPost } from './../library/posts/entities';
import { AddPostComponent } from './add-post/add-post.component';
import { selectPostsByUserId } from './../library/posts/state/posts.selectors';
import * as PostsActions from '../library/posts/state/posts.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  user$!: Observable<SystemUser | undefined>;
  posts$?: Observable<SystemPost[]>;

  constructor(
    private readonly store: Store,
    private readonly dialog: MatDialog,
    ) {}

  ngOnInit(): void {
    this.store.dispatch(PostsActions.getPostsActions());
    this.user$ = this.store.select(selectUser).pipe(
      tap((user) => {
        this.posts$ = this.store.select(selectPostsByUserId(user!.id))
      })
    );
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }

  openDialog(): void {
    this.dialog.open(AddPostComponent);
  }

  deletePost(postId: string): void {    
    this.store.dispatch(PostsActions.deletePostActions({ postId }))
  }

}
