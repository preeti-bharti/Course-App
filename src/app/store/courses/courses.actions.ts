import { createAction, props } from "@ngrx/store";


export const requestAllCourses = createAction("[Courses] Get All Courses");
export const requestAllCoursesSuccess = createAction("[Courses] Get All Courses Success", props<{ courses: any }>());
export const requestAllCoursesFail = createAction("[Courses] Get All Courses Failure", props<{ errorMessage: any }>());


export const requestSingleCourse = createAction("[Courses] Get Single Course", props<{ courseId: string }>());
export const requestSingleCourseSuccess = createAction("[Courses] Get Single Course Success", props<{ course: any }>());
export const requestSingleCourseFail = createAction("[Courses] Get All Courses Failure", props<{ errorMessage: any }>());

export const requestFilteredCourses = createAction("[Courses] Get Filtered Course", props<{ keyword: string }>());
export const requestFilteredCoursesSuccess = createAction("[Courses] Get Filtered Course Success", props<{ courses: any }>());
export const requestFilteredCoursesFail = createAction("[Courses] Get Filtered Course Failure", props<{ errorMessage: string }>());

export const requestDeleteCourse = createAction("[Courses] Delete Course", props<{ courseId: string }>());
export const requestDeleteCourseSuccess = createAction("[Courses] Delete Course Success");
export const requestDeleteCourseFail = createAction("[Courses] Delete Course Failure", props<{ errorMessage: any }>());

export const requestEditCourse = createAction("[Courses] Edit Course", props<{ courseId: string, courseDetails : any }>());
export const requestEditCourseSuccess = createAction("[Courses] Edit Course Success");
export const requestEditCourseFail = createAction("[Courses] Edit Course Failure", props<{ errorMessage: any }>());

export const requestCreateCourse = createAction("[Courses] Create Course", props<{ course: any }>());
export const requestCreateCourseSuccess = createAction("[Courses] Create Course Success");
export const requestCreateCourseFail = createAction("[Courses] Edit Create Failure", props<{ errorMessage: any }>());