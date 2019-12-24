import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild, ContentChild,
         ContentChildren, QueryList, ElementRef, Renderer2, AfterViewInit, AfterContentInit } from '@angular/core';
import { ShowDateComponent  } from '../show-date/show-date.component';
import * as moment from 'moment';

@Component({
  selector: 'app-projected-content',
  templateUrl: './projected-content.component.html',
  styleUrls: ['./projected-content.component.scss']
})
export class ProjectedContentComponent implements OnInit, OnChanges, AfterViewInit, AfterContentInit {

    public inputVariable = 100;

    @ViewChild('myViewChild2', { static: false }) myViewChild2: ElementRef;
    @ContentChild('contentchild', {static : false}) contentchild: ElementRef;
    @ContentChildren(ShowDateComponent) showDateComponent: QueryList<ShowDateComponent>;

    @Input() myVariacita = 0;

    @Input()
    set $prop(value: number) {
        this.inputVariable += value;
    }
    get $prop() {
        return this.inputVariable;
    }

    constructor(private ele: ElementRef, private render: Renderer2) { }
    ngOnInit() {
        console.log('*********** moment.js ************');
        console.log(moment().format('LLLL'));
        moment.locale('fr');
        console.log(moment().format('LLLL'));
        moment.locale('pt-BR');
        console.log(moment().format('LLLL'));
        moment.locale('es');
        console.log(moment().format('LLLL'));
        console.log('****************************');
    }

    ngOnChanges(changes: SimpleChanges) {
        // tslint:disable-next-line: forin
        for (const propName in changes) {
            const change = changes[propName];
            const curVal = JSON.stringify(change.currentValue);
            const prevVal = JSON.stringify(change.previousValue);
            const first = JSON.stringify(change.firstChange);
            console.log('-----propName = ', propName);
            console.log('first change? = ', first);
            console.log('-------preVal = ', prevVal);
            console.log('-------curVal = ', curVal);
            console.log('--------------------------');
        }
    }

    ngAfterViewInit() {
      this.render.setStyle(this.myViewChild2.nativeElement, 'background', 'green');
    }

    ngAfterContentInit() {
        this.render.setStyle(this.contentchild.nativeElement, 'background', 'gray');
        this.showDateComponent.toArray().forEach(ele => {
            ele.todayDate.subtract(27, 'days');
        });
    }

}
