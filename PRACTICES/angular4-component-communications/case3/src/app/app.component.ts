import { Component, ViewChild, ElementRef } from '@angular/core';
import { Child2Component } from './components/child2/child2.component';
import { Child3Component } from './components/child3/child3.component';
import { MyClass, IData } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MyClass]
})
export class AppComponent {
    private msgFromChild3:string;

    @ViewChild('nativeObject') nativeObject: ElementRef;
    @ViewChild('child2') child2: Child2Component; // using #child2 on template
    @ViewChild(Child3Component) child3: Child3Component; // using directly the child component class name

    constructor() {}
    ngOnInit() { }

    giveMeRandom() {
        return MyClass.getRandomNumber();
    }

    ngAfterViewInit() {
        setInterval(():void => {
            let value = MyClass.getRandomNumber();
            this.child2.myValue = value;
            value = MyClass.getRandomNumber();
            this.child3.myValue = value;
        },1400);

         setTimeout( ():void => {
             this.nativeObject.nativeElement.style.color = "#c3002f";
         }, 3000);
     }

 }
