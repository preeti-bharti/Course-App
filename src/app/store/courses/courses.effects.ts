import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';
import { requestAllCourses, requestAllCoursesFail, requestAllCoursesSuccess, requestCreateCourse, requestCreateCourseFail, requestCreateCourseSuccess, requestDeleteCourse, requestDeleteCourseFail, requestDeleteCourseSuccess, requestEditCourse, requestEditCourseFail, requestEditCourseSuccess, requestFilteredCourses, requestFilteredCoursesFail, requestFilteredCoursesSuccess, requestSingleCourse, requestSingleCourseFail, requestSingleCourseSuccess } from './courses.actions';
@Injectable()
export class coursesEffects {
    getAll$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestAllCourses),
            mergeMap(() => this.coursesService.getAll()
                .pipe(
                    map((response: any) => (requestAllCoursesSuccess({ courses: response }))),
                    catchError((error) => of(requestAllCoursesFail(error)))
                )
            )
        )
    );
    filteredCourses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestFilteredCourses),
            mergeMap((action) => this.coursesService.searchCourse(action.keyword)
                .pipe(
                    map((response: any) => (requestFilteredCoursesSuccess({ courses: response }))),
                    catchError((error) => of(requestFilteredCoursesFail(error)))
                )
            )
        )
    );
    getSpecificCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestSingleCourse),
            mergeMap((action) => this.coursesService.getCourse(action.courseId)
                .pipe(
                    map((response: any) => (requestSingleCourseSuccess({ course: response.result }))),
                    catchError((error) => of(requestSingleCourseFail(error)))
                )
            )
        )
    );
    deleteCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestDeleteCourse),
            mergeMap((action) => this.coursesService.deleteCourse(action.courseId)
                .pipe(
                    map(() => (requestDeleteCourseSuccess())),
                    catchError((error) => of(requestDeleteCourseFail(error)))
                )
            )
        )
    );
    editCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestEditCourse),
            mergeMap((action) => this.coursesService.editCourse(action.courseId, action.courseDetails)
                .pipe(
                    map(() => (requestEditCourseSuccess())),
                    catchError((error) => of(requestEditCourseFail(error)))
                )
            )
        )
    );
    createCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestCreateCourse),
            mergeMap((action) => this.coursesService.createCourse(action.course)
                .pipe(
                    map(() => (requestCreateCourseSuccess())),
                    catchError((error) => of(requestCreateCourseFail(error)))
                )
            )
        )
    );
    constructor(
        private actions$: Actions,
        private coursesService: CoursesService
    ) { }
}

