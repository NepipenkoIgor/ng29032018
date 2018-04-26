import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {MatButtonModule, MatCardModule, MatInputModule, MatMenuModule, MatToolbarModule} from '@angular/material';
import {SearchComponent} from './search/search.component';
import {CardComponent} from './card/card.component';
import {UsersFilterPipe} from './users-filter.pipe';
import {UsersService} from './common/services/users.service';
import {HttpClientModule} from '@angular/common/http';
import {BASE_URL, baseUrl} from './config';
import {DateService} from './common/services/date.service';
import { UsersComponent } from './users/users.component';
import { InfoComponent } from './info/info.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserComponent } from './users/user/user.component';
import {UserResolveService} from './users/user/user-resolve.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CardComponent,
    UsersFilterPipe,
    UsersComponent,
    UsersListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatMenuModule
  ],
  providers: [
    UsersService,
    {provide: BASE_URL, useValue: baseUrl},
    {provide: 'baseUrl', useValue: 'http://localhost:4200'},
    UserResolveService
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
