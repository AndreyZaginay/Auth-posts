import { createReducer, on } from "@ngrx/store";

import { AuthActions } from "@shomas/state";
import { AuthState } from "../interfaces";

const defaultAuthState: AuthState = {
  currentUser: undefined,
  isLoggedIn: false,
  error: undefined,
};

export const authReducer = createReducer(
  defaultAuthState,
  on(AuthActions.loginSuccessful, (state, { user }) => ({
    ...state,
    currentUser: user,
    isLoggedIn: true,
  })),
  on(AuthActions.loginFailed, (state, { error }) => ({
    ...state,
    error,
  })),
  on(AuthActions.logoutSuccessful, state => ({
    ...state, ...defaultAuthState
  })),
  on(AuthActions.registerSuccessful, (state, { user }) => ({
    ...state,
    user,
    isLoggedIn: true,
  })),
  on(AuthActions.registerFailed, (state, { error }) => ({
    ...state,
    error
  })),
);
