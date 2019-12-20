import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'async-promise-pipe',
    template: `<div>
    <code>promise|async</code>:
    <button (click)="clicked()">{{ arrived ? 'Reset' : 'Resolve' }}</button>
    <span>Wait for it... {{ greeting | async }}</span>
  </div>`
})
export class AsyncPromisePipeComponent {
    greeting: Promise<string> | null = null;
    arrived = false;

    // epa

    private resolve: Function | null = null;

    constructor() { this.reset(); }

    reset() {
        this.arrived = false;
        this.greeting = new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                this.resolve = resolve;
            }, 3000);
        });
    }

    clicked() {
        if (this.arrived) {
            this.reset();
        } else {
            this.resolve!('hi there!');
            this.arrived = true;
        }
    }
}