import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {
  private isLoading$$ = new BehaviorSubject(false);
  private courses$$ = new BehaviorSubject({});
  public isLoading$ = this.isLoading$$.asObservable();
  public courses$ = this.courses$$.asObservable().pipe(distinctUntilChanged());
  constructor(private coursesService: CoursesService) { 
  }
  getAll() {
    this.startLoading();
    this.coursesService.getAll().subscribe(courses => {
      this.courses$$.next(courses);
      this.stopLoading();
    })
  }
  createCourse(courseObj: any) {
    this.startLoading();
    this.coursesService.createCourse(courseObj).subscribe(data => {
      this.stopLoading();
    })
  }
  editCourse(courseId: Number, courseObj: any) {
    this.startLoading();
    this.coursesService.editCourse(courseId, courseObj).subscribe(data => {
      this.stopLoading();
      this.getAll();
    })
  }
  getCourse(courseId: any) {
    return this.coursesService.getCourse(courseId);
  }
  deleteCourse(courseId: any) {
    this.startLoading();
    this.coursesService.deleteCourse(courseId).subscribe(data => {
      this.stopLoading();
      this.getAll();
    })
  }
  searchCourse(searchItem: string) {
    this.startLoading();
    this.coursesService.searchCourse(searchItem).subscribe(data => {
      this.courses$$.next(data);
      this.stopLoading();
    })
  }
  startLoading() {
    this.isLoading$$.next(true);
  }
  stopLoading() {
    this.isLoading$$.next(false);
  }
}
