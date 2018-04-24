import {Route} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {InfoComponent} from './info/info.component';
import {UsersListComponent} from './users/users-list/users-list.component';
import {UserComponent} from './users/user/user.component';
import {UserResolveService} from './users/user/user-resolve.service';


export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UsersListComponent,
        data: {
          title: 'List of our group:'
        }
      },
      {
        path: ':id',
        component: UserComponent,
        resolve: {
          user: UserResolveService
        }
      },
      {
        path: '**',
        redirectTo: '/users'
      }
    ]
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: '**',
    redirectTo: 'info'
  }
];
