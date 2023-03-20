import { createAction, props } from '@ngrx/store';

export const requestAuthors = createAction('[Author] Get Authors');
export const requestAuthorsSuccess = createAction('[Author] Get Authors Success', props<{ authors: any }>());
export const requestAuthorsFail = createAction('[Author] Get Authors Failure');

export const requestAddAuthor = createAction('[Author] Add Author', props<{ author: any }>());
export const requestAddAuthorSuccess = createAction('[Author] Add Authors Success', props<{ addedAuthors : any }>());
export const requestAddAuthorFail = createAction('[Author] Add Authors Failure');