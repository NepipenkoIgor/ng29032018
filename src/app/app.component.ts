import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {UsersService} from './common/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public width = 50;
  public text;
  public placeholder = 'Search term';
  public logo = 'https://hsto.org/webt/eb/ly/pp/eblypp6fge8ppfcellukk_kimf0.png';

}
