import { Component, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { Child2Component } from './components/child2/child2.component';
import { Child3Component } from './components/child3/child3.component';
import { MyClass, IData } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MyClass]
})
export class AppComponent implements AfterViewInit {
    private msgFromChild3: string;

    @ViewChild('nativeObject') nativeObject: ElementRef;
    @ViewChild('child2') child2: Child2Component; // using #child2 on template
    @ViewChild(Child3Component) child3: Child3Component; // using directly the child component class name

    constructor(private el: Renderer2) {}
    // ngOnInit() { }

    giveMeRandom() {
        return MyClass.getRandomNumber();
    }

    ngAfterViewInit() {
        setInterval((): void => {
            let value = MyClass.getRandomNumber();
            this.child2.myValue = value;
            this.child2.myMsg = `This's been modified` ;
            value = MyClass.getRandomNumber();
            this.child3.myValue = value;
        }, 1400);

         setTimeout( (): void => {
             // this.nativeObject.nativeElement.style.color = "#c3002f";
             this.el.setStyle(this.nativeObject.nativeElement, 'color', 'yellow');
         }, 4000);
     }

 }
