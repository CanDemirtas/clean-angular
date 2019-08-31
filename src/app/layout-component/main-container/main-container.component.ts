import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/core/services/sidebar.service';

@Component({
  selector: 'main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {

  title = 'clean-angular';
  showFiller = true;
  opened: boolean = true;
  toggleSidebar = false;

  constructor(private sidebarService: SidebarService) {
  }
  toggle() {
    this.toggleSidebar = !this.toggleSidebar
    this.sidebarService.toggle(this.toggleSidebar);
  }
  ngOnInit() {
    this.sidebarService.toogle.subscribe(data => this.opened = data)
  }


}
