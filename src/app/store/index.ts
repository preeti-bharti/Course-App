import { ActionReducerMap } from "@ngrx/store";
import { AuthEffects } from "../auth/store/auth.effects";
import { authReducer, AuthState } from "../auth/store/auth.reducer";
import { UserEffects } from "../user/store/user.effects";
import { userReducer, UserState } from "../user/store/user.reducer";
import { AuthorEffects } from "./authors/authors.effects";
import { authorsReducer, AuthorsState, initialState } from "./authors/authors.reducer";
import { coursesEffects } from "./courses/courses.effects";
import { coursesReducer, CoursesState } from "./courses/courses.reducer";

interface State {
    user : UserState;
    auth : AuthState;
    author : AuthorsState;
    course : CoursesState;
}

export const reducers: ActionReducerMap<State> = { 
    user : userReducer,
    auth : authReducer,
    author : authorsReducer,
    course : coursesReducer
}

export const effects = [UserEffects, AuthEffects, AuthorEffects, coursesEffects];