import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public title = 'material # 1';
    public myFatherValue = 'Pajuo el que lo lea';
    public myFatherIntValue: number;

    constructor() {
        this.myFatherIntValue = 13;
    };
    ngOnInit(): void {
        setInterval(() => {
            this.myFatherIntValue++;
    console.log('frfrr');
        }, 2500);
    }
}
