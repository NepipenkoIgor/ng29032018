import {Injectable} from '@angular/core';
import {Resolve, Router} from '@angular/router';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/src/router_state';
import {Observable} from 'rxjs/Observable';
import {UsersService} from '../../common/services/users.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserResolveService implements Resolve<User> {

  constructor(
    private _usersService: UsersService,
    private _router: Router
  ) {
  }


  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User | null> {
    return this._usersService.getUsers()
      .map((users: User[]) => {
        const currentUser = users.find((user: User) => {
          return route.params.id === user.id.toString();
        });
        if (!currentUser) {
          throw new Error('no user');
          return;
        }
        return currentUser;
      })
      .catch(() => {
        this._router.navigate(['users']);
        return Observable.of(null);
      })
      ;
  };

}
