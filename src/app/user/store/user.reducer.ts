import { Action, createReducer, on } from "@ngrx/store";
import { requestCurrentUser, requestCurrentUserFail, requestCurrentUserSuccess } from "./user.actions";

export const userFeatureKey = "user";


export interface UserState {
    isAdmin: boolean;
    name: string;
}

export const initialState: UserState = {
    isAdmin: false,
    name: "",
};

export const userReducer = createReducer(
    initialState,
    on(requestCurrentUser, (state: UserState) => ({ ...state })),
    on(requestCurrentUserSuccess, (state: UserState, { user }) => ({
        ...state,
        name: user.name,
        isAdmin: user.role == 'user' ? false : true
    })),
    on(requestCurrentUserFail, (state: UserState) => ({ ...state }))
);

// export const userReducer = (state: UserState, action: Action): UserState => reducer(state, action);
