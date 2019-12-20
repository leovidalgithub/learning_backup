import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
// import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    user: {};
    subscription: Subscription;

    constructor() { }

    ngOnInit() { // Manual subscription handling
        this.subscription = this.getAsyncData().subscribe( u => this.user = u );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    getAsyncData() { // Fake slow async retrieve data
        return Observable.of({
            firstName: 'Luke',
            lastName: 'Skywalker',
            age: 65,
            height: 172,
            mass: 77,
            homeworld: 'Tatooine'
        }).delay( 1500 );
    }
}
