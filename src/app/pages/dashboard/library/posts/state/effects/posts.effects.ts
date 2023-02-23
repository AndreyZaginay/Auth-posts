import { mergeMap, take, tap } from 'rxjs';
import { catchError, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';

import { PostsService } from '../../services/posts.service';
import { SystemPost , CollectionPost} from '../../entities';
import * as PostsActions from '../actions/posts.actions'

@Injectable()
export class PostsEffects {

   readonly getPosts$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PostsActions.getPostsActions),
            mergeMap(() => this.postsService.getPosts().pipe(
                map((postList: SystemPost[]) => PostsActions.getPostsActionsSuccess({ postList })),
                // catchError(error: Error) => of(PostsActions.getPostsFailed({ error }))
            ))
        )
    });

   readonly createPost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PostsActions.createPostActions),
            mergeMap(({ newPost }) => this.postsService.createPost(newPost).pipe(
                map(post => PostsActions.createPostSuccess({ post })),
                // catchError(error: Error) => of(PostsActions.createPostFailed({ error }))
            ))
        )
    })

   readonly deletePost$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(PostsActions.deletePostActions),
            mergeMap((action) => this.postsService.deletePost(action.postId).pipe(
                map((postId) => PostsActions.deletePostSuccess({ postId })),
                // catchError(error: Error) => of(PostsActions.deletePostFailed({ error }))
            )),
         )
    })

    constructor(
        private readonly actions$: Actions,
        private readonly postsService: PostsService
    ){}
}
