import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { requestAllCourses, requestCreateCourse, requestDeleteCourse, requestEditCourse, requestFilteredCourses, requestSingleCourse } from "./courses.actions";
import { CoursesState } from "./courses.reducer";
import { coursesQuery } from "./courses.selectors";

@Injectable()
export class CoursesStateFacade {

    isAllCoursesLoading$ = this.store.select(coursesQuery.isAllCoursesLoadingSelector);
    isSingleCourseLoading$ = this.store.select(coursesQuery.isSingleCourseLoadingSelector);
    isSearchingState$ = this.store.select(coursesQuery.isSearchingStateSelector);
    courses$ = this.store.select(coursesQuery.getCourses);
    allCourses$ = this.store.select(coursesQuery.getAllCourses);
    course$ = this.store.select(coursesQuery.getCourse);
    errorMessage$ = this.store.select(coursesQuery.getErrorMessage);

    constructor(private store: Store<CoursesState>) { }

    getAllCourses() {
        this.store.dispatch(requestAllCourses());
    }
    getSingleCourse(id: string) {
        this.store.dispatch(requestSingleCourse({ courseId: id }));
    }
    getFilteredCourses(searchValue: string) {
        this.store.dispatch(requestFilteredCourses({ keyword: searchValue }));
    }
    editCourse(id: any, courseDetails: string) {
        this.store.dispatch(requestEditCourse({  courseId: id , courseDetails: courseDetails }));
    }
    createCourse(courseDetails: any) {
        this.store.dispatch(requestCreateCourse({ course: courseDetails }));
    }
    deleteCourse(id: string) {
        this.store.dispatch(requestDeleteCourse({ courseId: id }));
    }
}
