import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MatCardModule, MatInputModule, MatToolbarModule} from '@angular/material';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './card/card.component';
import { UsersFilterPipe } from './users-filter.pipe';


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
    MatCardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
