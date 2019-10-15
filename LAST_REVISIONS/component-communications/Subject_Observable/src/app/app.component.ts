import { Component, OnInit } from '@angular/core';
import { MyClass, ShareDataService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MyClass, ShareDataService]
})
export class AppComponent implements OnInit {
    // private msgFromChild3: string;

    constructor(private ss: ShareDataService) {}

    ngOnInit() {
        setInterval((): void => {
            const child: number = MyClass.getRandomChild();
            const msg = MyClass.getRandomNumber();
            this.ss.setLogged(child, {msg: msg});
        }, 200);
     }

 }
