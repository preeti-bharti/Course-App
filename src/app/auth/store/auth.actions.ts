import { createAction, props } from '@ngrx/store';
import { UserModel } from '../services/auth.service';

export const requestLogin = createAction('[Auth] Login', props<{ user : UserModel }>());
export const requestLoginSuccess = createAction('[Auth] Login Success', props<{ token : string }>());
export const requestLoginFail = createAction('[Auth] Login Failure', props<{ errorMessage : string }>());

export const requestRegister = createAction('[Auth] Register', props<{ user : UserModel }>());
export const requestRegisterSuccess = createAction('[Auth] Register Success');
export const requestRegisterFail = createAction('[Auth] Register Failure' , props<{ errorMessage : string }>());

export const requestLogout = createAction('[Auth] Logout');
export const requestLogoutSuccess = createAction('[Auth] Logout Success');