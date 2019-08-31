import { Component, OnInit, Input, ViewChild, AfterContentInit, ViewChildren } from '@angular/core';
import { MatDrawer } from '@angular/material';
import { SidebarService } from 'src/app/core/services/sidebar.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterContentInit {
  title = 'clean-angular';
  showFiller = true;
  opened: boolean = true;

  constructor(private sidebarService: SidebarService) {
  }

  ngOnInit() {
    this.sidebarService.toogle.subscribe(data => this.opened = data)
  }

  ngAfterContentInit() {

  }



}
