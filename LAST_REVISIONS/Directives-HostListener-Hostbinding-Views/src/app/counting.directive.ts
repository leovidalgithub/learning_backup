import { Component, Directive, OnInit, HostListener, HostBinding, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[myCounting]'
})
export class CountingDirective implements OnInit {

    //  private numberOfClicks = 0;

    @HostBinding('style.border') border: string;
    @HostBinding('class.myClass') addClass: Boolean = false;

    @HostListener('mouseover', ['$event.target'])
        thisMouseOverFunction(btn) {
            this.border = '2px solid orange';
            this.addClass = true;
            // console.log(btn, '-', this.numberOfClicks++);
        }

    @HostListener('mouseout')
        thisMouseOutFunction() {
            this.border = 'none';
            this.addClass = false;
        }

    constructor() {}
    ngOnInit() {}
}
// -------------------------------------------------
@Component({
    selector: `app-son`,
    template: `<div style="border:1px dashed yellow;">
        <p>{{myVar}}</p>
    </div>`,
    styles: [``]
})
export class SonComponent {
    public myVar: String = 'Original message';
    constructor() { }
    myMethod(msg: string) { this.myVar = msg + '***'; }
}
// -------------------------------------------------
@Component({
    selector: `app-leo`,
    template: `<div style="border:1px solid green;">
        <button myCounting>Increment</button><hr>
        <div myCounting>This is a simpel div</div>
        <app-son #son1></app-son>
        <app-son #son2></app-son>
        <hr>
        <button (click)="myFunction1()">Send to my son2</button>,
        <button (click)="myFunction2()">Send to first son found</button>
        <button (click)="myFunction3()">Send to all my sons</button>
    </div>`,
    styles: [`button {
                    background-color: red;ng 
                    color: beige;
                }`]
})
export class LeoComponent implements AfterViewInit, OnInit {
    @ViewChild(SonComponent) firstSonFound: SonComponent; // since there are more than one app-son, it will get the first found
    @ViewChild('son2') mySon2: SonComponent;
    @ViewChildren(SonComponent) allMySons: QueryList<SonComponent>; // object with all SonComponent found

    constructor() {}
    myFunction1() {
        this.mySon2.myMethod('New msg from Daddy');
    }
    myFunction2() {
        this.firstSonFound.myMethod('New msg for the first son found');
    }
    myFunction3() {
        this.allMySons.forEach((item: SonComponent) => {
            item.myMethod('Msg updated using @ViewChildren for everybody');
        });
    }
    ngOnInit() {}
    ngAfterViewInit () {}
}
