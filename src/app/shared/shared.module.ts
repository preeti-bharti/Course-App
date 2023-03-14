import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as sharedCompDivPipe from './components';

@NgModule({
  declarations: [...sharedCompDivPipe.componentsDirectivesPipes],
  imports: [
    CommonModule,FormsModule,FontAwesomeModule 
  ],
  exports:[...sharedCompDivPipe.componentsDirectivesPipes]
})
export class SharedModule { 

}
