import { Component, OnInit, ViewChild } from '@angular/core';
import { MyClass } from './shared';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [MyClass]
})
export class AppComponent implements OnInit {

    public msgFromChild3: string;
    public msgToChild1 = `To CHILD-1 from PARENT =`;
    public msgToChild2 = `To CHILD-2 from PARENT`;

    eventFromChild3(msg) {
        this.msgFromChild3 = String(msg);
    }

    ngOnInit(): void {
        setInterval((): void => {
            let value: number;
            value = MyClass.getRandomNumber();
            this.msgToChild1 = `To CHILD-1 from PARENT =
            ${String(value)}`
        }, 2500);
    }

}
