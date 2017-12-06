import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMyHoverDirective]'
})
export class MyHoverDirectiveDirective implements OnInit {
  @HostBinding('style.color') color = 'gray';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() { }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
    this.color = 'red';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'gray');
    this.color = 'gray';
  }
}
