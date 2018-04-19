import {Injectable} from '@angular/core';

@Injectable()
export class DateService {

  private _date = Date.now();

  constructor() {
  }

  public getDate(): number {
    return this._date;
  }
}
