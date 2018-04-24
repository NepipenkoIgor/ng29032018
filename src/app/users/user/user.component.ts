import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'course-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user$: Observable<{ user: User }>;


  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit() {
    this.user$ = this._activatedRoute.data;
  }

}
