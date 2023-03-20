import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authorsFeatureKey, AuthorsState } from "./authors.reducer";

const getAuthorsState = createFeatureSelector<AuthorsState>(authorsFeatureKey);

const getAddedAuthors = createSelector(getAuthorsState, (state: AuthorsState) => {
    return state.addedAuthor;
});
const getAuthors = createSelector(getAuthorsState, (state: AuthorsState) => {
    return state.authors;
});

export const authorsQuery = {
    getAddedAuthors,
    getAuthors
};