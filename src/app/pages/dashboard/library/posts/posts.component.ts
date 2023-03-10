import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as PostsActions from './state/actions/posts.actions';
import { selectPostList } from '@shomas/posts/state';
import { SystemPost } from './entities';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{
postList$: Observable<SystemPost[]> = this.store.select(selectPostList);

constructor(
  private readonly store: Store,
  ) {}

  ngOnInit(): void {
    this.store.dispatch(PostsActions.getPostsActions());
  }

  

}
