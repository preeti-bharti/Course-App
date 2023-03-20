import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule} from '@angular/router';
//import { ReactiveFormsModule } from '@angular/forms';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,SharedModule,RouterModule
    //ReactiveFormsModule,FontAwesomeModule
  ],
  exports:[LoginComponent]
})
export class LoginModule { }
