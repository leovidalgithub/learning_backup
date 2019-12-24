import { Component, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { MyClass, MyFunctions } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MyClass, MyFunctions]
})
export class AppComponent implements AfterViewInit {

    public valueForChild2Input = '@Input child2 from app.component';
    public normalVariable;

    @ViewChild('nativeObject', {static: false}) nativeObject: ElementRef; // 'nativeObject' is an <h4></h4> element
    @ViewChild('child2', {static: false}) child2: Child2Component; // using #child2 on template and its type is the class itself
    @ViewChild(Child1Component, { static: false }) child1Component;

  constructor(private renderer: Renderer2, private myFun: MyFunctions) {}

    public giveMeRandom( ): MyClass {
        return MyClass.getRandomNumber();
    }

    public methodInvokedWhenChild2Output(v) {
        this.normalVariable = 'eventEmmiter from child2 = ' + v;
    }

    ngAfterViewInit() {
        setInterval((): void => {
            this.child2.myValue = MyClass.getRandomNumber();
            this.child2.myMsg = `This's been modified`;
            this.child2.myMethod();
        }, 3400);

        setTimeout( (): void => {
            // this.nativeObject.nativeElement.style.color = '#333'; // BAD PRACTICE
             this.renderer.setStyle(this.nativeObject.nativeElement, 'background', 'red');
             this.renderer.addClass(this.nativeObject.nativeElement, 'myNewClass');
        }, 2500);

        setInterval((): void => {
          this.child1Component.myValue = this.myFun.myFunction();
        }, 1440);
    }
 }
