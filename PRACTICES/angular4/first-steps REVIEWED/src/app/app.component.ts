import { Component, OnInit } from '@angular/core';
import { MyService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {

    public title = 'App Title';

    constructor(private ms: MyService ) {}

    ngOnInit(): void {
        setTimeout(() => {
            this.title = this.ms.sayHello();
        }, 3500);
    }
}
