import { PostsState } from '../../../pages/dashboard/posts/state/posts-state.interface'
import { AuthState } from "./auth";

export interface AppState {
    posts: PostsState;
    auth: AuthState
}
