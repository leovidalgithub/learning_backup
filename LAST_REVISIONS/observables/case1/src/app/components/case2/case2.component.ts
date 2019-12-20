import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-case2',
  templateUrl: 'case2.component.html',
  styleUrls: ['./case2.component.scss']
})
export class Case2Component implements OnInit {

    public observable = new Observable(mySubscriberParam => {
        mySubscriberParam.next(1);
        mySubscriberParam.next(2);
        mySubscriberParam.next(3);
        setTimeout(() => {
            mySubscriberParam.next(4);
            mySubscriberParam.complete();
        }, 4000);
    });

    user: Observable<Object>; // user: Observable<{}>;

      constructor() { }

      ngOnInit() {
          console.log('just before subscribe');
          this.observable.subscribe({
              next(x) { console.log('got value ' + x); },
              error(err) { console.error('something wrong occurred: ' + err); },
              complete() { console.log('done'); }
          });
          console.log('just after subscribe');

          // because async pipe creates a subscription each time it appears on html
          // we use RxJS share() operator to share the subscription with multiple subscribers
          this.user = this.getAsyncData().share();
      }

      // #Note: when use Async Pipe this is not necessary to unsubscribe when component destroy
      // becasue the Pipe functionality handles this

      getAsyncData() {
            return Observable.of({
            firstName: 'Luke',
            lastName: 'Skywalker',
            age: 65,
            height: 172,
            mass: 77,
            homeworld: 'Tatooine'
        }).delay( 3000 );
      }
}
