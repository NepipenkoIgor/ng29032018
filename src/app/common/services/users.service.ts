import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import {BASE_URL} from '../../config';

@Injectable()
export class UsersService {

  public constructor(
    private _http: HttpClient,
    @Inject(BASE_URL) private _baseUrl: string
  ) {
  }

  public getUsers(): Observable<User | null> {

    return this._http.get<User>(`${this._baseUrl}/courses/groups/api/participants?key=kpans4`)
      .pipe(
        catchError(err => of(null))
      );
  }
}
