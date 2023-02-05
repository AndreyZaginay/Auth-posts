import { PostsState } from './posts-state.interface';
import { createFeatureSelector } from '@ngrx/store';

export const selectPosts = createFeatureSelector<PostsState>('posts')

