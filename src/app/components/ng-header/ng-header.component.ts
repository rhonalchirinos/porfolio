import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-header',
  templateUrl: './ng-header.component.html',
  styleUrls: ['./ng-header.component.scss']
})
export class NgHeaderComponent implements OnInit {

  navBar: boolean;
  collapsing: boolean;

  constructor() {
    this.navBar = false;
    this.collapsing = false;
  }

  ngOnInit(): void {
  }

  onShow() {
    this.collapsing = true;
    setTimeout(() => {
      this.navBar = !this.navBar;
      this.collapsing = false;
    }, 1000)
  }

}
