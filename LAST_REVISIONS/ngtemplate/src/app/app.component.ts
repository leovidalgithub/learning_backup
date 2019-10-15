import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public condition = true;
    public myProp = 0;

    public contextObj = {
        $implicit: '$implicit value',
        donut: "Old fashioned glazed",
        cafe: "El cafecito bien bueno"
    };

    constructor() { }

    ngOnInit(): void {
        setInterval(() => {
            this.condition = !this.condition;
        }, 500);
        setInterval(() => {
            this.myProp += 5;
        }, 6500);
    }

}
