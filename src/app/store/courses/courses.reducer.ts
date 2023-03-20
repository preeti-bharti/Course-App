import { Action, createReducer, on } from "@ngrx/store";
import { requestAllCourses, requestAllCoursesFail, requestAllCoursesSuccess, requestCreateCourse, requestCreateCourseFail, requestCreateCourseSuccess, requestDeleteCourse, requestDeleteCourseFail, requestDeleteCourseSuccess, requestEditCourse, requestEditCourseFail, requestEditCourseSuccess, requestFilteredCourses, requestFilteredCoursesFail, requestFilteredCoursesSuccess, requestSingleCourse, requestSingleCourseFail, requestSingleCourseSuccess } from "./courses.actions";


export const coursesFeatureKey = "course";


export interface CoursesState {
    allCourses: any;
    courses: any;
    course: any;
    isAllCoursesLoading: boolean;
    isSingleCourseLoading: boolean;
    isSearchState: boolean;
    errorMessage: string;
}

export const initialState: CoursesState = {
    allCourses: [],
    courses: [],
    course: {},
    isAllCoursesLoading: false,
    isSingleCourseLoading: false,
    isSearchState: false,
    errorMessage: ""
};

export const coursesReducer = createReducer(
    initialState,
    on(requestAllCourses, (state: CoursesState) => ({ ...state, isAllCoursesLoading: true })),
    on(requestAllCoursesSuccess, (state: CoursesState, { courses }) => ({
        ...state,
        allCourses: courses,
        isAllCoursesLoading: false
    })),
    on(requestAllCoursesFail, (state: CoursesState, { errorMessage }) => ({
        ...state,
        errorMessage: errorMessage,
        isAllCoursesLoading: false
    })),
    on(requestFilteredCourses, (state: CoursesState) => ({ ...state, isSearchState: true })),
    on(requestFilteredCoursesSuccess, (state: CoursesState, { courses }) => ({
        ...state,
        courses: courses,
        isSearchState: false
    })),
    on(requestFilteredCoursesFail, (state: CoursesState, { errorMessage }) => ({
        ...state,
        errorMessage: errorMessage,
        isSearchState: false
    })),
    on(requestSingleCourse, (state: CoursesState) => ({ ...state, isSingleCourseLoading: false })),
    on(requestSingleCourseSuccess, (state: CoursesState, { course }) => ({
        ...state,
        course: course,
        isSingleCourseLoading: false
    })),
    on(requestSingleCourseFail, (state: CoursesState, { errorMessage }) => ({
        ...state,
        errorMessage: errorMessage,
        isSingleCourseLoading: false
    })),
    on(requestDeleteCourse, (state: CoursesState) => ({ ...state })),
    on(requestDeleteCourseSuccess, (state: CoursesState) => ({ ...state })),
    on(requestDeleteCourseFail, (state: CoursesState, { errorMessage }) => ({
        ...state,
        errorMessage: errorMessage
    })),
    on(requestEditCourse, (state: CoursesState) => ({ ...state })),
    on(requestEditCourseSuccess, (state: CoursesState) => ({ ...state })),
    on(requestEditCourseFail, (state: CoursesState, { errorMessage }) => ({
        ...state,
        errorMessage: errorMessage
    })),
    on(requestCreateCourse, (state: CoursesState) => ({ ...state })),
    on(requestCreateCourseSuccess, (state: CoursesState) => ({ ...state })),
    on(requestCreateCourseFail, (state: CoursesState, { errorMessage }) => ({
        ...state,
        errorMessage: errorMessage
    })),
);

// export const coursesReducer = (state: CoursesState, action: Action): CoursesState => reducer(state, action);
