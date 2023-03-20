import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { DatePipe } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { TokenInterceptor } from './auth/guards/token.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoursesModule } from './features/courses/courses.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './features/login/login.module';
import { RegistrationModule } from './features/registration/registration.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app.routing.module';
import { effects, reducers } from './store';
import { AuthorStateFacade } from './store/authors/authors.facade';
import { CoursesStateFacade } from './store/courses/courses.facade';
import { UserFacade } from './user/store/user.facade';
import { AuthStateFacade } from './auth/store/auth.facade';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    CoursesModule,
    BrowserAnimationsModule,
    LoginModule,RegistrationModule,SharedModule,
    AppRoutingModule,
    AuthModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      name: 'Courses App',
      logOnly: environment.production
    })
  ],
  providers: [DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }, CoursesStateFacade, AuthorStateFacade, AuthStateFacade, UserFacade],
  bootstrap: [AppComponent]
})
export class AppModule { }
