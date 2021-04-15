import { Component, OnInit } from '@angular/core';
import { faAward, faGraduationCap, faUniversity } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {

  faGraduationCap = faGraduationCap;
  faAward = faAward;
  faUniversity = faUniversity;

  constructor() { }

  ngOnInit(): void {

  }

}
