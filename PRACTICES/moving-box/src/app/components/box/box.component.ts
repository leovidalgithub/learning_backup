import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
declare var $ :any;

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';
// import 'rxjs/add/operator/debounce';
import 'rxjs/Rx';
import Rx from 'rx-lite';

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

    constructor() { }

    ngOnInit() {
        // let tt = new Date();
        // console.log('Now!');
        // tt.setSeconds(tt.getSeconds() + 2);
        // let pp = Observable.timer(0,50)
        // .buffer(function() { Observable.timer(125); } );
        // var source = Observable.timer(0, 1000)

        var myClick = Observable.fromEvent($('#box'),'click');
        myClick.map(val => val)
        .subscribe( val => console.log(val));

    //     var source = Observable.interval(1000)
    //   .bufferCount(3)
    //   .take(3);

    var source = Observable.interval(100)
    .bufferTime(600)
    .take(3)
    .subscribe(
          val => console.log(val),
          err => console.log(err),
          () => console.log('completed')
      );

      var times = [
          { value: 0, time: 100},
          { value: 1, time: 600},
          { value: 2, time: 400},
          { value: 3, time: 700},
          { value: 4, time: 200}
      ];

      let source2 = Rx.Observable.from(times)
      .flatMap( item => {
          return Observable
            .of(item.value)
            .delay(item.time)
      })
      .debounce(500)
    // .pluck('value')
      .subscribe(
            val => console.log('val ' + val),
            err => console.log(err),
            () => console.log('*completed*')
        );


      let md = Rx.Observable.range(1,3)
        .select( function(x,idx,obs){
            return x*x;
        }).subscribe( val => console.log('This val ' + val));
//****************************************************************************
    // const $BUTTON = document.querySelector('.thisB');
    const $BUTTON = $('button');
    const CLICK$ = Observable.fromEvent($BUTTON,'click');

    CLICK$
        .bufferTime(2000)
        .map(clicks => clicks.length)
        .filter(length => length > 0)
        .subscribe(
            clicks => console.log(`${clicks} clicks en menos de 2000ms`)
        );


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
