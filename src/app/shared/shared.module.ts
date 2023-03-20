import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as sharedCompDivPipe from './components';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [...sharedCompDivPipe.componentsDirectivesPipes, ConfirmModalComponent],
  imports: [
    CommonModule,FormsModule,FontAwesomeModule,ReactiveFormsModule,RouterModule
  ],
  exports:[...sharedCompDivPipe.componentsDirectivesPipes,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule]
})
export class SharedModule { 

}
