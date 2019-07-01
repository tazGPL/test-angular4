import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseover') onMouseOverHandler() {
    this.renderer.addClass(this.el.nativeElement, 'border');
    this.renderer.addClass(this.el.nativeElement, 'border-primary');
  }

  @HostListener('mouseleave') onMouseLeaveHandler() {
    this.renderer.removeClass(this.el.nativeElement, 'border');
    this.renderer.removeClass(this.el.nativeElement, 'border-primary');
  }


  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    console.log('test')
  }

}
