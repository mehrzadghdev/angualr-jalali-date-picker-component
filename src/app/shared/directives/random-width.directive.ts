import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[keyRandomWidth]'
})
export class RandomWidthDirective implements OnInit {
  
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const randomWidth = this.getRandomWidth();
    this.renderer.setStyle(this.el.nativeElement, 'width', randomWidth);
  }

  getRandomWidth(): string {
    const min = 50;
    const max = 100;
    const randomPercentage = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomPercentage + '%';
  }
}
