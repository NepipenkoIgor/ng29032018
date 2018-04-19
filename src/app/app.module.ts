import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MatCardModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {SearchComponent} from './search/search.component';
import {CardComponent} from './card/card.component';
import {UsersFilterPipe} from './users-filter.pipe';
import {UsersService} from './common/services/users.service';
import {HttpClientModule} from '@angular/common/http';
import {BASE_URL, baseUrl} from './config';
import {DateService} from './common/services/date.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CardComponent,
    UsersFilterPipe
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    {provide: BASE_URL, useValue: baseUrl},
    {provide: 'baseUrl', useValue: 'http://localhost:4200'},
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
