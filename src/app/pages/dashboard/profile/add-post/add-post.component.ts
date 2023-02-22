import { map, Observable, Subject, takeUntil, tap } from 'rxjs';
import { FormControl , FormGroup, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import * as PostsActions from '../../library/posts/state/posts.actions'
import { selectCurrentUserId } from '@shomas/state';
import { BasePost, CollectionPost } from '../../library/posts/entities';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})

export class AddPostComponent implements OnInit, OnDestroy{
postForm!: FormGroup;
currentUserId: Observable<string | undefined> = this.store.select(selectCurrentUserId);
private readonly destroy$: Subject<void> = new Subject<void>();

  constructor (
    private readonly store: Store,
    public dialogRef: MatDialogRef<AddPostComponent>,
    ) {}

  ngOnInit(): void {
    this.initPostForm();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  submitPostForm(): void {
    if (this.postForm.invalid) {
      return;
    }
    this.currentUserId.pipe(
      takeUntil(this.destroy$)
    ).subscribe(userId => {
      const newPost: BasePost = { authorId: userId, ...this.postForm.getRawValue()};
      this.store.dispatch(PostsActions.createPostActions({ newPost }));
      this.dialogRef.close();
    })
  }

  initPostForm(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      content: new FormControl(null, [Validators.required]),
    });
  }

}
