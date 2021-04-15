import { Component, OnInit } from '@angular/core';
import { faLinkedin, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ng-footer',
  templateUrl: './ng-footer.component.html',
  styleUrls: ['./ng-footer.component.scss']
})
export class NgFooterComponent implements OnInit {

  faCopyright = faCopyright;
  faWhatsapp = faWhatsapp;
  faLinkedin = faLinkedin;
  faTelegram = faTelegram;
  
  constructor() { }

  ngOnInit(): void {
  }

}
