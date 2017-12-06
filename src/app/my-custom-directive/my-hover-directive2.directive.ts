import {Directive, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive ({
  selector: '[appMyHoverDirective2]'
})
export class MyHoverDirective2Directive implements OnInit {
  @Input() defaultBackgroundColor;
  @Input() mouseOverBackgroundColor;
  @HostBinding('style.backgroundColor') backgroundColor;
  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultBackgroundColor;
  }

  @HostListener('mouseenter') mouseover(eventDate: Event) {
    this.backgroundColor = this.mouseOverBackgroundColor;
  }

  @HostListener('mouseleave') mouseleave(eventDate: Event) {
    this.backgroundColor = this.defaultBackgroundColor;
  }
}
