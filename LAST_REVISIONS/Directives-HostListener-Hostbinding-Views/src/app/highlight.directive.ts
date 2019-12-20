import {Directive, ElementRef, OnInit, HostListener, Renderer2, HostBinding } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[myHighlight]'
})
export class HighlightDirective implements OnInit {

    @HostBinding('class.myBlurClass') private isBlur: boolean;
    @HostBinding('style.color') color = 'red';

    constructor(private element: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        setInterval( () => {
            this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.getColor());
            // element.nativeElement.style.backgroundColor = this.getColor(); // BAD PRACTICE
        }, 2000);

        setInterval( () => {
            this.isBlur = !this.isBlur;
        }, 3700);
    }

  private getColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  @HostListener('mouseover', ['"A message"', '$event'])
    handleClick(greeting: string, event: any) {
        this.renderer.setStyle(this.element.nativeElement, 'color', this.getColor());
        console.log(greeting);
    //   let part = this.el.nativeElement.querySelector('.card-text');
    //   this.renderer.setElementStyle(part, 'display', 'block');
    }

}
