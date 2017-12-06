import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive ({
  selector: '[appBetterColorChange]'
})

export class MyBetterCustomDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'green');
  }
}
