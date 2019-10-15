import { Component, OnInit, Input, OnChanges, SimpleChanges, ContentChild, ContentChildren, QueryList, ElementRef, Renderer2, AfterContentInit } from '@angular/core';
import { ShowDateComponent  } from "../../show-date/show-date/show-date.component";
import * as moment from 'moment';

@Component({
  selector: 'app-projected-content',
  templateUrl: './projected-content.component.html',
  styleUrls: ['./projected-content.component.scss']
})
export class ProjectedContentComponent implements OnInit, OnChanges, AfterContentInit {

    public inputVariable: number = 100;

    @ContentChild('contentchild') contentchild : ElementRef;
    @ContentChildren(ShowDateComponent) showDateComponent: QueryList<ShowDateComponent>;

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
        for (let propName in changes) {
            let change = changes[propName];
            let curVal = JSON.stringify(change.currentValue);
            let prevVal = JSON.stringify(change.previousValue);
            let first = JSON.stringify(change.firstChange);
            console.log('*first change? = ', first);
            console.log('********preVal = ', prevVal);
            console.log('********curVal = ', curVal);
        }
    }

    ngAfterContentInit() {
        this.render.setStyle(this.contentchild.nativeElement,"background", "white");
        this.showDateComponent.toArray().forEach(ele => {
            ele.todayDate.subtract(27, 'days');
        });
    }

}
