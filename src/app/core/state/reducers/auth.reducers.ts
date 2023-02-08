import { createReducer, on } from "@ngrx/store";

import { AuthState } from "../interfaces/auth";
import * as AuthActions from '../actions/auth.actions';



const defaultAuthState: AuthState = {
  currentUser: null,
  isLoggedIn: false,
  error: null,
};

export const authReducer = createReducer(
  defaultAuthState,
  on(AuthActions.loginSuccessful, (state, { user }) => ({
    ...state,
    currentUser: user,
    isLoggedIn: true,
  })),
  on(AuthActions.logoutSuccessful, state => ({
    ...state,
    user: null,
    isLoggedIn: false,
  })),
  on(AuthActions.registerSuccessful, (state, { user }) => ({
    ...state,
    user,
    isLoggedIn: true,
  })),
);
