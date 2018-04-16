import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'course-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public user;

  @Input()
  public position;

  @Input()
  public isOdd;

  constructor() {

  }

  ngOnInit() {

  }

  public getAvatar(user): string {
    return user && user.photo
      ? user.photo
      : 'assets/images/avatar.png';
  }
}
