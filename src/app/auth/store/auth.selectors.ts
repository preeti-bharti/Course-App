import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authFeatureKey, AuthState } from "./auth.reducer";

const getAuthState = createFeatureSelector<AuthState>(authFeatureKey);

const isUserAuthorized = createSelector(getAuthState, (state: AuthState) => {
    return state.isAuthorized;
});
const getToken = createSelector(getAuthState, (state: AuthState) => {
    return state.token;
});
const getSpecificErrorMessage = createSelector(getAuthState, (state: AuthState) => {
    return state.errorMessage;
});

export const authsQuery = {
    isUserAuthorized,
    getToken,
    getSpecificErrorMessage
};