import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from '../registration/registration.component';
//import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule} from '@angular/router';
@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    //ReactiveFormsModule,
    SharedModule,RouterModule
  ],
  exports:[RegistrationComponent]
})
export class RegistrationModule { }
