import { Component, OnInit } from '@angular/core';
import { MyClass } from './../../shared';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
    public myValue:number = 0;
    public message:string = 'My msg';

    constructor() { }

    ngOnInit() {
        setInterval(():void => {
            let value = MyClass.getRandomNumber();
            this.myValue = value;
        },2000);
    }

    exampleFunction() {
        console.log(`myValue = ${this.myValue}`);
    }

}
