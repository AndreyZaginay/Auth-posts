import { mergeMap } from 'rxjs';
import { catchError, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';

import { PostsService } from '../services/posts.service';
import { SystemPost , CollectionPost} from './../entities';
import * as PostsActions from './posts.actions'

@Injectable()
export class PostsEffects {

    getPosts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PostsActions.getPostsActions),
            mergeMap(() => this.postsService.getPosts().pipe(
                map((postList: SystemPost[]) => PostsActions.getPostsActionsSuccess({ postList })),
                // catchError(error: Error) => of(PostsActions.getPostsFailed({ error }))
            ))
        )
    });

    createPost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PostsActions.createPostActions),
            mergeMap(({ newPost }) => this.postsService.createPost(newPost).pipe(
                map(post => PostsActions.createPostSuccess({ post })),
                // catchError(error: Error) => of(PostsActions.createPostFailed({ error }))
            ))
        )
    })

    deletePost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PostsActions.deletePostActions),
            mergeMap(({ postId }) => this.postsService.deletePost(postId)),
            map(() => PostsActions.deletePostSuccess()),
            // catchError(error: Error) => of(PostsActions.deletePostFailed({ error }))
         )
    })

    constructor(
        private readonly actions$: Actions,
        private readonly postsService: PostsService
    ){}
}
