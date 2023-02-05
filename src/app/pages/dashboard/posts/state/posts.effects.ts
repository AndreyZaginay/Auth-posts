import { PostsService } from '../services/posts.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';

import * as PostsActions from './posts.actions'
import { Post } from '../entities/post';

@Injectable()
export class PostsEffects {

    getPosts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PostsActions.getPostsActions),
            switchMap(() => this.postsService.getPosts().pipe(
                map((postList: Post[]) => PostsActions.getPostsActionsSuccess({ postList }))
            ))
        )
    })

    constructor(
        private readonly actions$: Actions,
        private readonly postsService: PostsService
    ){}
}
