import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfoComponent} from './info.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NameValidatorDirective } from './name-validator.directive';
import { AsyncEqualsValidatorDirective } from './async-equals-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '',
      component: InfoComponent
    }])
  ],
  declarations: [
    InfoComponent,
    NameValidatorDirective,
    AsyncEqualsValidatorDirective
  ]
})
export class InfoModule {
}
