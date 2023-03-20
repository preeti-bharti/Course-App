import { createFeatureSelector, createSelector } from "@ngrx/store";
import { coursesFeatureKey, CoursesState } from "./courses.reducer";

const getCoursesState = createFeatureSelector<CoursesState>(coursesFeatureKey);

const isAllCoursesLoadingSelector = createSelector(getCoursesState, (state: CoursesState) => {
    return state.isAllCoursesLoading;
});
const isSearchingStateSelector = createSelector(getCoursesState, (state: CoursesState) => {
    return state.isSearchState;
});
const isSingleCourseLoadingSelector = createSelector(getCoursesState, (state: CoursesState) => {
    return state.isSingleCourseLoading;
});
const getCourses = createSelector(getCoursesState, (state: CoursesState) => {
    return state.courses;
});
const getAllCourses = createSelector(getCoursesState, (state: CoursesState) => {
    return state.allCourses;
});
const getCourse = createSelector(getCoursesState, (state: CoursesState) => {
    return state.course;
});
const getErrorMessage = createSelector(getCoursesState, (state: CoursesState) => {
    return state.errorMessage;
});

export const coursesQuery = {
    isAllCoursesLoadingSelector,
    isSearchingStateSelector,
    isSingleCourseLoadingSelector,
    getCourses,
    getAllCourses,
    getCourse,
    getErrorMessage
};