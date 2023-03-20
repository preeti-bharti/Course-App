import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get(`${environment.apiUrl}courses/all`).pipe(map((response : any) => { return response.result }));
  }
  createCourse(courseObj: any) {
    return this.http.post(`${environment.apiUrl}courses/add`, courseObj).pipe((response : any) => { return response });
  }
  editCourse(courseId : any, courseObj: any) {
    return this.http.put(`${environment.apiUrl}courses/${courseId}`, courseObj).pipe((response : any) => { return response });
  }
  getCourse(courseId : any) {
    return this.http.get(`${environment.apiUrl}courses/${courseId}`).pipe((response : any) => { return response });
  }
  deleteCourse(courseId : any){
    return this.http.delete(`${environment.apiUrl}courses/${courseId}`).pipe((response : any) => { return response });
  }
  searchCourse(searchItem: string) {
    var queryParam = { duration: searchItem, creationDate: searchItem, description: searchItem, title: searchItem };
    return this.http.get(`${environment.apiUrl}courses/filter`, { params: queryParam }).pipe(map((response : any) => { return response.result }));
  }
}