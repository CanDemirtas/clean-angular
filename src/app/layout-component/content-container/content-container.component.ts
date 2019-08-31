import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/core/services/sidebar.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss']
})
export class ContentContainerComponent implements OnInit {
  toggleSidebar = false;
  mode = new FormControl('over');

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {

  }

  toggle() {
    this.toggleSidebar = !this.toggleSidebar
    this.sidebarService.toggle(this.toggleSidebar);
  }

}
