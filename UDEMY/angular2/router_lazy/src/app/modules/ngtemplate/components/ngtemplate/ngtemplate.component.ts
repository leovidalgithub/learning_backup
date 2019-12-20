import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  templateUrl: './ngtemplate.component.html',
  styleUrls: ['./ngtemplate.component.scss']
})
export class NgtemplateComponent implements OnInit {
    public condition = true;
    public myProp = 0;

    public contextObj = {
        $implicit: '$implicit value',
        donut: 'Old fashioned glazed',
        cafe: 'El cafecito bien bueno'
    };

    constructor() {}

    ngOnInit(): void {
        setInterval(() => {
            this.condition = !this.condition;
        }, 500);
        setInterval(() => {
            this.myProp += 5;
        }, 6500);
    }

}
