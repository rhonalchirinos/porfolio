import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { debug } from 'util';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy {

  sliders = [];
  show: any;
  source: any;
  subscribe: Subscription;

  constructor() { }

  ngOnInit() {
    this.sliders = [
      {
        type: 'html',
      },
      {
        type: 'image',
        src: '/assets/images/sliders/f1.jpg',
        title: 'title',
        caption: 'caption'
      },
      {
        type: 'image',
        src: '/assets/images/sliders/f2.png',
        title: 'title',
        caption: 'caption'
      },
      {
        type: 'image',
        src: '/assets/images/sliders/f3.jpg',
        title: 'title',
        caption: 'caption'
      },
      {
        type: 'image',
        src: '/assets/images/sliders/f4.jpg',
        title: 'title',
        caption: 'caption'
      }
    ];

    this.show = this.sliders[0];
    this.source = interval(15000);
    this.subscribe = this.source.subscribe(() => {
      const index = this.sliders.indexOf(this.show);
      const i = index < this.sliders.length ? index + 1 : 0;
      this.show = this.sliders[i];
    });

  }

  active(i){
    this.show = this.sliders[i];

  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

  



}
