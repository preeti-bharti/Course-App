import { createAction, props } from '@ngrx/store';
import { User } from '../use.model';

export const requestCurrentUser = createAction('[User] Get Current User');
export const requestCurrentUserSuccess = createAction('[User] Get Current User Success', props<{ user : User }>());
export const requestCurrentUserFail = createAction('[User] Get Current User Failure');