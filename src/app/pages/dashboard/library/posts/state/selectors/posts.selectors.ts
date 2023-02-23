import { createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store';

import { PostsState } from '../posts-state.interface';

export const selectPostState = createFeatureSelector<PostsState>('posts');

export const selectPostList = createSelector(selectPostState, ({ postList }) => postList);

export const selectPost = (postId: string) => {
    return createSelector(
        selectPostList,
        postList => postList.find(({ id }) => id === postId)!
    );
}

export const selectPostsByUserId = (userId: string) => {
    return createSelector(
        selectPostList, postList => postList.filter(({ authorId }) => authorId === userId!)
    );
}