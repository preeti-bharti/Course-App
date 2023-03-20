import { createFeatureSelector, createSelector } from "@ngrx/store";
import { userFeatureKey, UserState } from "./user.reducer";

const getUserState = createFeatureSelector<UserState>(userFeatureKey);

const getName = createSelector(getUserState, (state: UserState) => {
    return state.name;
  });
  const isAdmin = createSelector(getUserState, (state: UserState) => {
    return state.isAdmin;
  });
  
  export const usersQuery = {
    getName,
    isAdmin
  };