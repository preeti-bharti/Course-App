import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from '../courses/courses.component';
import { SharedModule } from 'src/app/shared/shared.module';
//import { CourseModule } from '../course/course.module';
import { LoginModule } from '../login/login.module';
import { CourseListComponent } from '../courses/course-list/course-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CoursesViewComponent } from './courses-view/courses-view.component';
import { AdminGuard } from 'src/app/user/guards/admin.guard';
@NgModule({
  declarations: [
    CoursesComponent,
    CourseListComponent,
    CourseAddComponent,
    CourseEditComponent,
    CourseCardComponent,
    CoursesViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
   //CourseModule,
    LoginModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  exports:[ 
    CoursesComponent,
    FontAwesomeModule,
    ReactiveFormsModule,
    CourseEditComponent,
    CourseAddComponent
  ],
  providers: [AdminGuard]
})
export class CoursesModule { }
