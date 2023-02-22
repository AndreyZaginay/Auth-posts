import { createSelector } from '@ngrx/store';
import { PostsState } from './posts-state.interface';
import { createFeatureSelector } from '@ngrx/store';

export const selectPostState = createFeatureSelector<PostsState>('posts');

export const selectPostList = createSelector(selectPostState, ({ postList }) => postList);

