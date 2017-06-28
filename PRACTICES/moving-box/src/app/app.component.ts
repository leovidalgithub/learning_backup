import { Component } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    varXParent:number;
    varYParent:number;
    myColor:string;

    ngOnInit() {
        $( '#main' ).mousemove( event => {
            this.varXParent = event.offsetX;
            this.varYParent = event.offsetY;
        })
    }

    eventFromChild( value ) {
        this.myColor = value.myColor;
    }

}
