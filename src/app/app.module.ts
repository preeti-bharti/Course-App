import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoursesModule } from './features/courses/courses.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './features/login/login.module';
import { RegistrationModule } from './features/registration/registration.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    CoursesModule,
    BrowserAnimationsModule,
    LoginModule,RegistrationModule,SharedModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
