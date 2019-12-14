import { Directive, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Directive({
  selector: '[appTerminalPrompt]'
})
export class TerminalPromptDirective implements OnInit, OnDestroy {

  source: any;
  show: boolean;
  subscribe: Subscription;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.show = true;
    this.source = interval(1000);
    this.subscribe = this.source.subscribe(() => {

      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'display',
        this.show ? 'contents' : 'none'
      );
      this.show = !this.show;
    });

  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }

}