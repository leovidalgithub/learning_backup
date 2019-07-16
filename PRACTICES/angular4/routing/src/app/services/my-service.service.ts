import { Injectable } from '@angular/core';
import { Subject ,  Observable } from 'rxjs';
import { Logged } from './../definitions';

@Injectable()
export class MyService {
    private logged: Logged;
    private subject: Subject<Logged> = new Subject<Logged>();

    setLogged(logged: Logged): void {
        this.logged = logged;
        this.subject.next(logged);
    }

    getLogged(): Observable<Logged> {
        return this.subject.asObservable();
    }

  constructor() { }

  fn() { // test function for HomeComponent
      return 'method from MyService';
  }

}
