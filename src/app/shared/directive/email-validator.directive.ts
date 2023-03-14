import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    selector: "[isEmail]",
    providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }]
})
export class EmailValidatorDirective {

  constructor() { }
  public validate(control: AbstractControl): { [key: string]: any } {
    if (control.value.length >= 1) {
        let emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
        let valid = emailRegEx.test(control.value);
        console.log(valid);
        return valid ? { 'isNotEmail': false } : { 'isNotEmail': true };
    }
    else {
        return { 'isNotEmail': false }
    }
}

}
