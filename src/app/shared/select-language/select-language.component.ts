import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss']
})
export class SelectLanguageComponent implements OnInit {

  @Input()
  currentLanguage: string;

  @Output()
  onChange = new EventEmitter<string>();

  flag: string;
  showHide: boolean;

  constructor() {

  }

  ngOnInit() {
    this.showHide = false;
    this.flag = this.currentLanguage === 'es' ? '/assets/images/spain.png' : '/assets/images/united-kingdom.png';
  }

  openSelector() {
    this.showHide = !this.showHide;
  }

  select(lang: string) {
    this.currentLanguage = lang;
    this.flag = this.currentLanguage === 'es' ? '/assets/images/spain.png' : '/assets/images/united-kingdom.png';
    this.onChange.emit(lang);
    this.showHide = false;
  }

}
