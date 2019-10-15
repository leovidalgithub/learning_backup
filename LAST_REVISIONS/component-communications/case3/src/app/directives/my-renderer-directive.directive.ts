import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyRendererDirective]'
})
export class MyRendererDirectiveDirective implements OnInit {

        constructor(private element: ElementRef, private renderer: Renderer2) {}

        ngOnInit(): void {
            this.renderer.addClass(this.element.nativeElement, 'wildClass');
            this.renderer.setStyle(this.element.nativeElement, 'color', 'yellow');

            const div = this.renderer.createElement('div');
            const text = this.renderer.createText('Este div fue agregado por la directiva!');
            this.renderer.appendChild(div, text);
            this.renderer.appendChild(this.element.nativeElement, div);

            this.renderer.setAttribute(this.element.nativeElement, 'aria-hidden', 'true');
            // this.renderer.setProperty(this.el.nativeElement, 'alt', 'Cute alligator'); // FOR img TAG
        }

}
