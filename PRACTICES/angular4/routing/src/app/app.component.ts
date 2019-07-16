import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    link: String = 'https://coryrylan.com/blog/introduction-to-angular-routing';
    borderGreen: Boolean = true;

    private myInterval = setInterval(() => {
        this.borderGreen = !this.borderGreen;
    }, 1800);

    constructor() {}
}
