import { createReducer, on } from '@ngrx/store';
import { PostsState } from "./posts-state.interface";
import * as PostsActions from './posts.actions';

export const initialState: PostsState = {
    postList: []
}

export const postsReducers = createReducer(
    initialState,
    on(PostsActions.getPostsActionsSuccess, (state, { postList }) => ({
        ...state, postList: postList, 
    }))
)