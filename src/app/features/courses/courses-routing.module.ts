import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthorizedGuard } from "src/app/auth/guards/authorized.guard";
import { AdminGuard } from "src/app/user/guards/admin.guard";
import { CourseEditComponent } from "./course-edit/course-edit.component";
import { CourseListComponent } from "./course-list/course-list.component";
import { CoursesViewComponent } from "./courses-view/courses-view.component";
import { CourseAddComponent } from "./course-add/course-add.component";

const coursesRoute: Routes = [
    { path: '', component: CourseListComponent },
    { path: 'add', component: CourseAddComponent, canActivate:[AdminGuard] },
    { path: ':id', component: CoursesViewComponent },
    { path: 'edit/:id', component: CourseEditComponent, canActivate:[AdminGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(coursesRoute)],
    exports: [RouterModule],
    providers: []
})
export class CoursesRoutingModule { }