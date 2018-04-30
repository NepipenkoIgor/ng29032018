import {Directive} from '@angular/core';
import {FormGroup, NG_ASYNC_VALIDATORS} from '@angular/forms';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import {delay} from 'rxjs/operators';

@Directive({
  selector: '[courseAsyncEqualsValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useValue: asyncEqualValidator,
      multi: true
    }
  ]
})
export class AsyncEqualsValidatorDirective {
}


export function asyncEqualValidator({value}: FormGroup): Observable<{ [key: string]: boolean }> {
  const [password, cpassword] = Object.keys(value);
  const valid = value[password] === value[cpassword]
    ? null
    : {
      noequals: true
    };
  return of(valid).pipe(delay(5000));
}
