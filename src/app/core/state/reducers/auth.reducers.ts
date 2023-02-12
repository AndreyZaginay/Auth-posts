import { createReducer, on } from "@ngrx/store";

import { AuthState } from "../interfaces/auth";
import * as AuthActions from '../actions/auth.actions';
import { SystemUser } from "../../entities/system-user";

const defaultUser: SystemUser = {
  id: '',
  firstname: '',
  lastname: '',
  email: '',
  password: ''
}

const defaultAuthState: AuthState = {
  currentUser: defaultUser,
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
    ...state,
    user: defaultUser,
    isLoggedIn: false,
  })),
  on(AuthActions.registerSuccessful, (state, { user }) => ({
    ...state,
    user,
    isLoggedIn: true,
  })),
);
