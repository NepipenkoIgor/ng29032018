import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {from} from 'rxjs/observable/from';
import {delay} from 'rxjs/operators';
import {Observer} from 'rxjs/Observer';
import {Subject} from 'rxjs/Subject';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {async} from 'rxjs/scheduler/async';

@Component({
  selector: 'course-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public formModel: FormGroup;

  public formArrayModel = new FormGroup({
    emails: new FormArray([new FormControl('')])
  });

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.formModel = this._fb.group({
      firstName: ['',
        [Validators.required, this._nameValidor]],
      lastName: ['',
        [Validators.required, Validators.minLength(4)]],
      passwordGroup: this._fb.group({
        password: ['',
          [Validators.required, Validators.minLength(4)]],
        cpassword: ['',
          [Validators.required, Validators.minLength(4)]],
      }, {
        asyncValidator: [this._asyncEqualValidator]
      })
    });
    //
    // const sequence$ = new Observable((observer: Observer<number>) => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count++);
    //   }, 1000);
    // });

  .// const sequence$ = fromEvent(window, 'click');
    const arr = [];
    for (let i = 0; i < 10000; i++) {
      arr.push(i);
    }

    const sequence$$ = from(arr, async);


    // const sequence$$ = new ReplaySubject(Number.POSITIVE_INFINITY);

    // sequence$$.next('add 1');
    // sequence$$.next('add 2');
    // sequence$$.next('add 3');
    // sequence$$.next('add 4');
    console.log(`CONSUMER start`);
    console.time(`CONSUMER`);
    sequence$$.subscribe((data: string) => {
      console.timeEnd(`CONSUMER`);
    });
    console.log(`CONSUMER end`);

    // sequence$$.next('add 5');
    // sequence$$.next('add 6');
    // sequence$$.next('add 7');
    // sequence$$.next('add 8');


    // setTimeout(() => {
    //   sequence$.subscribe((data: MouseEvent) => {
    //     console.log(`CONSUMER-2 ${data.clientX}`);
    //   });
    // }, 5000);

  }

  public addEmail(): void {
    (this.formArrayModel.get('emails') as FormArray).push(new FormControl(''));
  }

  private _nameValidor(control: FormControl): { [key: string]: boolean } {
    const value = control.value || '';
    const valid = /^[a-zA-Z]*$/.test(value);
    return valid ? null : {nospecial: true};
  }

  private _asyncEqualValidator({value}: FormGroup): Observable<{ [key: string]: boolean }> {
    const [password, cpassword] = Object.keys(value);
    const valid = value[password] === value[cpassword]
      ? null
      : {
        noequals: true
      };
    return of(valid).pipe(delay(5000));
  }
}
