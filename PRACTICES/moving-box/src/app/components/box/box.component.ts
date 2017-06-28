import { Component, OnInit, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
declare var $ :any;

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

    constructor() { }

    ngOnInit() { }

    ngOnChanges(changes:SimpleChanges) {
        if(!this.time1[0]) {
            this.time1[0] = new Date();
            this.time1[1] = this.time1[0];
        } else {
            this.time1[1] = new Date();
        }

        if ( (this.time1[0] - this.time1[1]) < 500 ) {
            this.fn1();
        } else {
            this.time1[0] = this.time1[1];
        }


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
            queue    : true,
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
