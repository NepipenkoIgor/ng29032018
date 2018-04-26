import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../common/services/users.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'course-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public usersStream$: Observable<User[]>;
  public title: string;

  public constructor(
    private _usersService: UsersService,
    private _activatedRoute: ActivatedRoute
  ) {

  }

  public ngOnInit(): void {
    this._activatedRoute.data.subscribe((data: { title: string }) => {
      this.title = data.title;
    });
    this.usersStream$ = this._usersService.getUsers();
  }

}
