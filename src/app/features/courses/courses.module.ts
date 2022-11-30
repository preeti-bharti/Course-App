import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from '../courses/courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseModule } from '../course/course.module';
import { LoginModule } from '../login/login.module';
import { CourseListComponent } from '../courses/course-list/course-list.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CourseModule,
    LoginModule
  ],
  exports:[ 
    CoursesComponent
  ]
})
export class CoursesModule { }
