import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-case3',
  templateUrl: 'case3.component.html',
  styleUrls: ['./case3.component.scss']
})
export class Case3Component {
    user: Observable<Object>; // user: Observable<{}>;

      constructor() { }

      ngOnInit() {
        this.user = this.getAsyncData().share();
        // because async pipe creates a subscription each time it appears on html
        // we use RxJS share() operator to share the subscription with multiple subscribers
      }

      // #Note: when use Async Pipe this is not necessary to unsubscribe when component destroy
      // becasue the Pipe functionality handles this

      getAsyncData() {
        return Observable.of({
          firstName: 'Brendon',
          lastName: 'Oneil',
          age: 45,
          height: 2432,
          mass: 44,
          homeworld: 'Nomelose'
      }).delay( 5000 );
      }
}
