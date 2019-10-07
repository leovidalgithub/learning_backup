import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-some-component',
  templateUrl: './some-component.component.html',
  styleUrls: ['./some-component.component.scss']
})
export class SomeComponentComponent implements OnInit, OnChanges {

    public inputVariable: number = 100;

    @Input()
    set $prop(value: number) {
        this.inputVariable += value;
    }
    get $prop() {
        return this.inputVariable;
    }

    constructor() { }
    ngOnInit() { }

    ngOnChanges(changes: SimpleChanges) {
        for (let propName in changes) {
            let change  = changes[propName];
            let curVal  = JSON.stringify(change.currentValue);
            let prevVal = JSON.stringify(change.previousValue);
            let first   = JSON.stringify(change.firstChange);
            console.log('first change? = ', first);
            console.log('preVal = ', prevVal);
            console.log('curVal = ', curVal);
        }
    }

}
