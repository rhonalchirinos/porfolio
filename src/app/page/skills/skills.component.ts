import { Component, OnInit } from '@angular/core';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  faBookReader = faBookReader;
  _skills: any[];
  constructor() {
    this._skills = [
      {
        img: '/assets/images/skills/angular.png',
        title: 'Angular'
      },
      {
        img: '/assets/images/skills/php.png',
        title: 'PHP'
      },
      {
        img: '/assets/images/skills/laravel.png',
        title: 'Laravel'
      },
      {
        img: '/assets/images/skills/node.png',
        title: 'Nodejs'
      },
      {
        img: '/assets/images/skills/vuejs.png',
        title: 'Vuejs'
      },
      {
        img: '/assets/images/skills/ionic.png',
        title: 'Ionic'
      },
      {
        img: '/assets/images/skills/gcloud.png',
        title: 'Gcloud'
      },
      {
        img: '/assets/images/skills/java.png',
        title: 'Java'
      },
      {
        img: '/assets/images/skills/rxjs.png',
        title: 'Rxjs'
      },
      {
        img: '/assets/images/skills/mongoDB.png',
        title: 'MongoDB'
      },
      {
        img: '/assets/images/skills/postgres.png',
        title: 'Postgres'
      },
      {
        img: '/assets/images/skills/mysql.png',
        title: 'Mysql'
      },
      {
        img: '/assets/images/skills/socketio.png',
        title: 'Socket.io'
      },
      {
        img: '/assets/images/skills/ExpressJS.png',
        title: 'Express'
      },
      {
        img: '/assets/images/skills/docker.png',
        title: 'Docker'
      },
      {
        img: '/assets/images/skills/git.png',
        title: 'Git'
      },
      {
        img: '/assets/images/skills/react.png',
        title: 'React'
      },
      {
        img: '/assets/images/skills/python.png',
        title: 'Python'
      },
      {
        img: '/assets/images/skills/aws.png',
        title: 'AWS'
      }
    ].sort((a, b) => Number( a.title < b.title));
  }

  ngOnInit(): void {
  }

}
