import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
declare var $ :any;

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';
import 'rxjs/Rx';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit, OnChanges {
    queueLength: number;
    time1:any[] = [];
    @Input() varX:number;
    @Input() varY:number;
    @Output() eventToParent: EventEmitter<Object> = new EventEmitter<Object>();

    // array = [1,2,3,4,5];
    // pp = Observable.from(this.array);
        // .takeLast(3);

    constructor() {
        let tt = new Date();
        console.log('Now!');
        tt.setSeconds(tt.getSeconds() + 3);
        let pp = Observable.timer(tt,1000);
        pp.subscribe( val => {
            console.log(val);
        })


     }

    ngOnInit() {
    }

    ngOnChanges(changes:SimpleChanges) {

        this.time1[1] = new Date();

        if(!this.time1[0]) {
            this.time1[0] = new Date();
        }

        // console.log(this.time1[1]-this.time1[0]);
        this.time1[0]=this.time1[1];
        // if ( (this.time1[0] - this.time1[1]) < 500 ) {
        //     this.time1[0] = this.time1[1];
        // } else {
        //     this.fn1();
        // }


    }

    fn1() {
        let myColor  = Math.floor( Math.random() * 16777215 ).toString( 16 );
        let myColor2 = Math.floor( Math.random() * 16777215 ).toString( 16 );
        this.eventToParent.next( { myColor : myColor } );

        $( '#box' ).animate({
            'top' : this.varY + 'px',
            'left' : this.varX + 'px',
            backgroundColor: '#' + myColor,
            color : '#' + myColor2
        },{
            queue    : false,
            duration : 100
       });
    //    setTimeout(() => {this.fn1();},500);
   }


    showtIt() {
        let n = $( '#box' ).queue( 'fx' ).length;
        this.queueLength = n;
        setTimeout(() => { this.showtIt();}, 500 );
    }

    stop() {
        let n = $( '#box' ).queue( 'fx', [] ).stop();
    }

}
