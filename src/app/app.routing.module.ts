import { Component, NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { LoginComponent } from "./features/login/login.component";
import { RegistrationComponent } from "./features/registration/registration.component";
import { AuthorizedGuard } from "./auth/guards/authorized.guard";
import { NotAuthorizedGuard } from "./auth/guards/not-authorized.guard";


const routes : Routes = [
    {path : 'login', component : LoginComponent, canActivate: [NotAuthorizedGuard]},
    {path : 'registration', component : RegistrationComponent, canActivate: [NotAuthorizedGuard]},
    {path : 'courses', loadChildren: () => import('./features/courses/courses-routing.module').then(m => m.CoursesRoutingModule), canLoad : [AuthorizedGuard]},
    {path : '', pathMatch : 'full', redirectTo : 'courses'}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }