import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MyClass } from './../../shared';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {
    public myValue = 0;
    public message: string;

    @Input() childNumber: number;

    constructor() { }

    ngOnInit() {
      setInterval((): void => {
        this.myValue = MyClass.getRandomNumber();
      }, 2000);
    }

    ngOnChanges(changes: SimpleChanges): void {
      if (changes.childNumber) {
        this.message = `I'm child #${changes.childNumber.currentValue}`;
      }
  }

    exampleFunction() {
      console.log('---------------------------');
      console.log(`childNumber = ${this.childNumber} / myValue = ${this.myValue}`);
    }

}
