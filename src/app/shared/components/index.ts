import { CommonComponent } from './common/common.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';

import { EmailValidatorDirective } from '../directive/email-validator.directive';
import { TogglePasswordDirective } from '../directive/toggle-password.directive';

import { DurationPipe } from '../pipes/duration.pipe';
import { CreationDatePipe } from '../pipes/creation-date.pipe';
import { StringJoinerPipe } from '../pipes/string-joiner.pipe';

import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

export const componentsDirectivesPipes: any[]=[CommonComponent,ButtonComponent,HeaderComponent,SearchComponent,
    EmailValidatorDirective,TogglePasswordDirective,
    DurationPipe,CreationDatePipe,StringJoinerPipe,
    ConfirmModalComponent
];

export * from './common/common.component'
export * from './button/button.component'
export * from './header/header.component'
export * from './search/search.component'

export * from '../directive/email-validator.directive'
export * from '../directive/toggle-password.directive'

export * from '../pipes/duration.pipe'
export * from '../pipes/creation-date.pipe'
export * from '../pipes/string-joiner.pipe'

export * from './confirm-modal/confirm-modal.component'