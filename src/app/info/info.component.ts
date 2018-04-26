import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

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
        [Validators.required, this.nameValidor]],
      lastName: ['',
        [Validators.required, Validators.minLength(4)]],
      passwordGroup: this._fb.group({
        password: ['',
          [Validators.required, Validators.minLength(4)]],
        cpassword: ['',
          [Validators.required, Validators.minLength(4)]],
      })
    });
  }

  public addEmail(): void {
    (this.formArrayModel.get('emails') as FormArray).push(new FormControl(''));
  }

  public nameValidor(control: FormControl): { [key: string]: boolean } {
    const value = control.value || '';
    const valid = /^[a-zA-Z]*$/.test(value);
    return valid ? null : {nospecial: true};
  }
}
