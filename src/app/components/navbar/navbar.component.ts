import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  language: string;
  isTop: boolean;
  showMenu: boolean;

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    this.language = 'en';
    this.isTop = true;
    this.showMenu = false;
  }

  onChangeLanguge(lang: string) {
    this.language = lang;
    this.translate.use(lang);
  }

  onScroll($event) {
    const verticalOffset = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop || 0;
    this.isTop = verticalOffset < 50;
  }

  onShowMenu() {
    this.showMenu = !this.showMenu;
  }

}
