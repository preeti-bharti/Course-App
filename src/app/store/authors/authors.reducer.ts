import { Action, createReducer, on } from "@ngrx/store";
import { requestSingleCourse } from "../courses/courses.actions";
import { requestAddAuthor, requestAddAuthorSuccess, requestAuthors, requestAuthorsFail, requestAuthorsSuccess } from "./authors.actions";


export const authorsFeatureKey = "author";


export interface AuthorsState {
    authors: any;
    addedAuthor: string;
}

export const initialState: AuthorsState = {
    authors: {},
    addedAuthor: "",
};

export const authorsReducer = createReducer(
    initialState,
    on(requestAuthors, (state: AuthorsState) => ({ ...state })),
    on(requestAuthorsSuccess, (state: AuthorsState, { authors }) => ({
        ...state,
        authors: authors
    })),
    on(requestAuthorsFail, (state: AuthorsState) => ({ ...state })),
    on(requestAddAuthor, (state: AuthorsState) => ({ ...state })),
    on(requestAddAuthorSuccess, (state: AuthorsState, { addedAuthors }) => ({
        ...state,
        addedAuthor: addedAuthors
    })),
    on(requestSingleCourse, (state: AuthorsState) => ({ ...state })),

);

// export const authorsReducer = (state: AuthorsState, action: Action): AuthorsState => reducer(state, action);
