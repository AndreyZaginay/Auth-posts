import { Store } from '@ngrx/store';
import { Observable, switchMap } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { SystemPost } from './../entities';
import { ActivatedRoute } from '@angular/router';
import { selectPost } from '@shomas/posts/state';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  post$!: Observable<SystemPost>;

  constructor(
    private readonly store: Store,
    private readonly route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    this.post$ = this.route.params.pipe(
      switchMap(params => this.store.select(selectPost(params['id'])))
    )
  }

}
