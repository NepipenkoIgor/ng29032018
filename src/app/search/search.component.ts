import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DateService} from '../common/services/date.service';

@Component({
  selector: 'course-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [DateService]
})
export class SearchComponent implements OnInit {

  @Input()
  public placeholder;

  @Output()
  public search = new EventEmitter();

  public constructor(
    private _dateService: DateService
  ) {

  }

  public ngOnInit(): void {
    console.log('search', this._dateService.getDate());
  }

  public onSearch(value: string): void {
    this.search.emit(value);
  }

}
