import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my application';
  author = 'Daniel Cataño Restrepo';
  count = 0;
  imgSource = './../favicon.ico';
  disabled = true;
  disable = 'Disable/Enable';
}
