import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MatInputModule, MatToolbarModule} from '@angular/material';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatInputModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
