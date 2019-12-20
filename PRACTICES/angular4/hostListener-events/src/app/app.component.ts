import { Component, HostListener } from '@angular/core';

export enum KEY_CODE {
    RIGHT_ARROW = 39,
    LEFT_ARROW = 37
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public value: number = 0;
    constructor() {}

    @HostListener('window:keyup', ['$event'])
        keyEvent( event: KeyboardEvent ) {
            console.log(event);
            if (event.keyCode === KEY_CODE.LEFT_ARROW) {
                this.decrement();
            }
            if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
                this.increment();
            }
        }

    increment() {
        this.value++;
    }
    decrement() {
        this.value--;
    }

}
