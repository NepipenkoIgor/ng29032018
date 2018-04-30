import {Directive} from '@angular/core';
import {FormControl, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[courseNameValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: nameValidor,
    multi: true
  }],
})
export class NameValidatorDirective {
}


export function nameValidor(control: FormControl): { [key: string]: boolean } {
  const value = control.value || '';
  const valid = /^[a-zA-Z]*$/.test(value);
  return valid ? null : {nospecial: true};
}
