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
    })),
    on(PostsActions.createPostSuccess, (state, { post }) => {
        const postList = [...state.postList];
        postList.push(post);
        return { ...state, postList }
    }),
    on(PostsActions.deletePostSuccess, (state, { postId }) => ({
        ...state, postList: state.postList.filter(({ id }) => id !== postId)
    }))
)