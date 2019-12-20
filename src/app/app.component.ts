import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    translate.use(this.lenguage());
  }

  private lenguage() {
    return navigator.language ? navigator.language.split('-')[0] : 'en';
  }

  ngOnInit(): void {
    setTimeout(() => {
      const elements = document.getElementsByClassName('loading-modal');
      while (elements.length > 0) {
        elements[0].remove();
      }
    }, 2000);
  }

}
