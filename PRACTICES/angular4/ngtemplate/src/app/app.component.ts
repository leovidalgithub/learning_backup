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

    ngOnInit(): void {
        setInterval(() => {
            this.condition = !this.condition;
            this.myProp += 5;
        }, 3500);
    }

}
