import { createAction, props } from "@ngrx/store";

import { SystemPost, BasePost } from "../../entities";

export const getPostsActions = createAction('[POSTS] get posts');
export const getPostsActionsSuccess = createAction('[POSTS] get posts success', props<{ postList: SystemPost[] }>());
export const getPostsFailed = createAction('[POSTS] get posts failed', props<{ error: Error }>());

export const createPostActions = createAction('[POSTS] create post', props<{ newPost: BasePost }>());
export const createPostSuccess = createAction('[POSTS] create success', props<{ post: SystemPost }>());
export const createPostFailed = createAction('[POSTS] create failed', props<{ error: Error }>());

export const deletePostActions = createAction('[POSTS] delete post', props<{ postId: string }>());
export const deletePostSuccess = createAction('[POSTS] delete post', props<{ postId: string }>());
export const deletePostFailed = createAction('[POSTS] delete post failed', props<{ error: Error }>());
