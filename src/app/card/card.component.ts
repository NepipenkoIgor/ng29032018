import {Component, Input, OnInit} from '@angular/core';
import {DateService} from '../common/services/date.service';

@Component({
  selector: 'course-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [DateService]
})
export class CardComponent implements OnInit {

  @Input()
  public user;

  @Input()
  public position;

  @Input()
  public isOdd;

  constructor(
    private _dateService: DateService
  ) {

  }

  ngOnInit() {
    console.log('card', this._dateService.getDate());
  }

  public getAvatar(user): string {
    return user && user.photo
      ? user.photo
      : 'assets/images/avatar.png';
  }
}
