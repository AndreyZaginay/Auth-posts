import { PostsState } from '../../../pages/content/posts/state/posts-state.interface'
import { AuthState } from "./auth";

export interface AppState {
    posts: PostsState;
    auth: AuthState
}
