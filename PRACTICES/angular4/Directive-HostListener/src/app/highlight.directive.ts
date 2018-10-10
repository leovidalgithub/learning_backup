import {Directive, ElementRef, OnInit, HostListener, Renderer2} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[myHighlight]'
})
export class HighlightDirective implements OnInit  {

  constructor(private element: ElementRef, private renderer: Renderer2) {

    setInterval( () => {
      this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.getColor());
      // element.nativeElement.style.backgroundColor = this.getColor(); // BAD PRACTICE
    }, 2900);
  }
  ngOnInit() { }

  private getColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  @HostListener('mouseover', ['$event'])
    handleClick(event: Event) {
        this.renderer.setStyle(this.element.nativeElement, 'color', this.getColor());
    }



}
