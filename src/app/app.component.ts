import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {users$, users} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
  public width = 50;
  public text;
  public placeholder = 'Search term';
  public border = '1px solid red';
  public logo = 'https://hsto.org/webt/eb/ly/pp/eblypp6fge8ppfcellukk_kimf0.png';

  public usersStream$ = users$;


  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
  }

  public changeColor(ev: MouseEvent) {
    console.log(ev);
    this.border = `1px solid green`;
  }

}
