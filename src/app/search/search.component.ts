import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'course-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Input()
  public placeholder;

  @Output()
  public search = new EventEmitter();

  public onSearch(value: string): void {
    this.search.emit(value);
  }

}
