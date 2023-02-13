import { createAction, props } from '@ngrx/store';

import { LoginCredentials, SystemUser, RegisterCredentials } from '@shomas/entities';

export const login = createAction('[Auth] Login', props<{ loginCredentials: LoginCredentials }>());
export const loginSuccessful = createAction('[Auth] Login Successful', props<{ user: SystemUser }>());
export const loginFailed = createAction('[Auth] Login failed', props<{ error: Error }>());

export const logout = createAction('[Auth] Logout');
export const logoutSuccessful = createAction('[Auth] Logout Successful');
export const logoutFailed = createAction('[Auth] Logout Failed', props<{ error: Error }>());

export const register = createAction('[Auth] Register', props<{ registerCredentials: RegisterCredentials }>());
export const registerSuccessful = createAction('[Auth] Register Successful', props<{ user: SystemUser }>());
export const registerFailed = createAction('[Auth] Register Failed', props<{ error: Error }>());


