import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit, OnChanges {
    queueLength: number;
    @Input() varX:number;
    @Input() varY:number;

  constructor() { }

  ngOnInit() { }

   ngOnChanges(changes:SimpleChanges) {
       this.fn1();
   }

   fn1() {
       let myColor = Math.floor(Math.random()*16777215).toString(16);
       let myColor2 = Math.floor(Math.random()*16777215).toString(16);

       $( '#box' ).animate({
           'top' : this.varY + 'px',
           'left' : this.varX + 'px',
           backgroundColor: '#' + myColor,
           color : '#' + myColor2
       },{
           queue    : false,
           duration : 300
       });
    //    setTimeout(() => {this.fn1();},500);
   }
   fn2() {}

    showtIt() {
       let n = $( '#box' ).queue( 'fx' ).length;
       this.queueLength = n;
       setTimeout(() => { this.showtIt();}, 500 );
   }
   stop() {
       let n = $( '#box' ).queue( 'fx', [] ).stop();
   }

}
