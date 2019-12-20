import { Component, OnInit, HostListener } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  skills: any[];
  seeMore: boolean;

  constructor() { }

  ngOnInit() {
    this.seeMore = false;
    this.skills = [
      {
        img: '/assets/images/skills/angular.png',
        title: 'Angular',
        percentage: 95
      },
      {
        img: '/assets/images/skills/php.png',
        title: 'Php',
        percentage: 100
      },
      {
        img: '/assets/images/skills/laravel.png',
        title: 'Laravel',
        percentage: 85
      },
      {
        img: '/assets/images/skills/node.png',
        title: 'Nodejs',
        percentage: 85
      },
      {
        img: '/assets/images/skills/vuejs.png',
        title: 'Vuejs',
        percentage: 88
      },
      {
        img: '/assets/images/skills/ionic.png',
        title: 'Ionic',
        percentage: 75
      },
      {
        img: '/assets/images/skills/gcloud.png',
        title: 'gcloud',
        percentage: 55
      },
      {
        img: '/assets/images/skills/java.png',
        title: 'Java',
        percentage: 80
      },
      {
        img: '/assets/images/skills/rxjs.png',
        title: 'Rxjs',
        percentage: 90
      },
      {
        img: '/assets/images/skills/mongoDB.png',
        title: 'MongoDB',
        percentage: 70
      },
      {
        img: '/assets/images/skills/postgres.png',
        title: 'Postgres',
        percentage: 95
      },
      {
        img: '/assets/images/skills/mysql.png',
        title: 'Mysql',
        percentage: 98
      },
      {
        img: '/assets/images/skills/socketio.png',
        title: 'Socket.io',
        percentage: 85
      },
      {
        img: '/assets/images/skills/ExpressJS.png',
        title: 'Express',
        percentage: 95
      }
    ];
  }

  onSeeMore() {
    this.seeMore = true;
  }

}


