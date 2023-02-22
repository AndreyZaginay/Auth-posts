import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AuthState } from '@shomas/state';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectLoggedIn = createSelector(selectAuthState, ({ isLoggedIn }) => isLoggedIn);

export const selectUser = createSelector(selectAuthState, ({ currentUser }) => currentUser);

export  const selectCurrentUserId = createSelector(selectAuthState, ({currentUser}) => currentUser?.id); 

export const selectError = createSelector(selectAuthState, ({ error }) => error?.message);
