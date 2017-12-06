import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive ({
  selector: '[appColorChange]' // attribute selector
})

export class MyCustomDirective implements OnInit {
  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
    this.elementRef.nativeElement.style.color = 'red';
  }
}

