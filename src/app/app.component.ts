import { Component, ViewChildren, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggleSidebar = false;

  toggle() {
    this.toggleSidebar = !this.toggleSidebar
  }

}
