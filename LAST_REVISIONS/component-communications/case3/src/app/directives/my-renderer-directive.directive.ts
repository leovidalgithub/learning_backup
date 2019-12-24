import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myDirective]'
})
export class MyRendererDirective implements OnInit {

        constructor(private element: ElementRef, private renderer: Renderer2) {}

        ngOnInit(): void {
          setTimeout(() => {
            this.renderer.addClass(this.element.nativeElement, 'wildClassAdded');
            this.renderer.setStyle(this.element.nativeElement, 'color', 'yellow');

            const newTag = this.renderer.createElement('p');
            const text = this.renderer.createText('This <p> was added by myDirective');
            this.renderer.appendChild(newTag, text);
            this.renderer.appendChild(this.element.nativeElement, newTag);

            this.renderer.setAttribute(this.element.nativeElement, 'aria-hidden', 'true');
            // this.renderer.setProperty(this.el.nativeElement, 'alt', 'Cute alligator'); // FOR img TAG
          }, 3500);
        }

}
