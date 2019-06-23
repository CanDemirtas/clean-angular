import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'angular-admin-lte';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public customLayout: boolean;

  title = 'can-blog';


  constructor(private layoutService: LayoutService) {

  }



  ngOnInit(): void {
    this.layoutService.isCustomLayout.subscribe((value: boolean) => {
      this.customLayout = value;
    });
  }


}
