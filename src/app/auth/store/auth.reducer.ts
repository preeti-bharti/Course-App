import { Action, createReducer, on } from "@ngrx/store";
import { requestLogin, requestLoginFail, requestLoginSuccess, requestLogout, requestLogoutSuccess, requestRegister, requestRegisterSuccess } from "./auth.actions";

export const authFeatureKey = "auth";

export interface AuthState {
    isAuthorized: boolean;
    token: string;
    errorMessage: string;
}

export const initialState: AuthState = {
    isAuthorized: false,
    token: "",
    errorMessage: ""
};

export const authReducer = createReducer(
    initialState,
    on(requestLogin, (state: AuthState) => ({ ...state })),
    on(requestLoginSuccess, (state: AuthState, { token }) => ({
        ...state,
        isAuthorized: token == '' ? false : true,
        token: token
    })),
    on(requestLoginFail, (state: AuthState, { errorMessage }) => ({
        ...state,
        isAuthorized: false,
        errorMessage: errorMessage
    })),
    on(requestRegister, (state: AuthState) => ({ ...state })),
    on(requestRegisterSuccess, (state: AuthState) => ({ ...state })),
    on(requestLoginFail, (state: AuthState, { errorMessage }) => ({
        ...state,
        errorMessage: errorMessage
    })),
    on(requestLogout, (state: AuthState) => ({ ...state })),
    on(requestLogoutSuccess, (state: AuthState) => ({ ...state, token : "", isAuthorized: false })),
);

// export const authReducer = (state: AuthState, action: Action): AuthState => reducer(state, action);
