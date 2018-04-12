import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public title = 'Hi Timo';
  public addition = 1.1;
  public width = 50;
  public text;
  public placeholder = 'Search term';
  public border = '1px solid red';
  public logo = 'https://hsto.org/webt/eb/ly/pp/eblypp6fge8ppfcellukk_kimf0.png';

  private _salary = 2000;


  public getSalary(): number {
    return this._salary;
  }

  public changeColor(ev: MouseEvent) {
    console.log(ev)
    this.border = `1px solid green`;
  }

}
