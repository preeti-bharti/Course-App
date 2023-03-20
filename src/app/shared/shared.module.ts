import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as sharedCompDivPipe from './components';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';

@NgModule({
  declarations: [...sharedCompDivPipe.componentsDirectivesPipes, ConfirmModalComponent],
  imports: [
    CommonModule,FormsModule,FontAwesomeModule 
  ],
  exports:[...sharedCompDivPipe.componentsDirectivesPipes]
})
export class SharedModule { 

}
