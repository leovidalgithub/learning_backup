import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public link: String = 'https://coryrylan.com/blog/introduction-to-angular-routing';
    public borderGreen: Boolean = true;
    public myBorderRadius = '12px';

    constructor() {}
    ngOnInit() {
        setInterval(() => {
            this.borderGreen = !this.borderGreen;
        }, 1800);
    }
}
