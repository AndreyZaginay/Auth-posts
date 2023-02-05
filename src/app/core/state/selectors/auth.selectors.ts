import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AuthState } from "../interfaces/auth";

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectLoggedIn = createSelector(selectAuthState, ({ isLoggedIn }) => isLoggedIn);

export const selectEmail = createSelector(selectAuthState, (user) => user);
