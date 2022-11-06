import { Component, OnInit } from '@angular/core';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.scss']
})
export class PorfolioComponent implements OnInit {

  faBookReader = faBookReader;
  constructor() { }

  ngOnInit(): void {
  }

}
