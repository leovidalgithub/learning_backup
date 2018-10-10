import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Service1Service implements OnInit {

  private subject = new Subject<any>();

  sendMessage(message: string) {
    this.subject.next({ text: message });
  }

  clearMessage() {
    this.subject.next();
  }
  getMessage(): Observable<any> {
    return this.subject.asObservable() // .asObservable() is not necessary: 'return this.subject' already returns an Observable
    .pipe(
      debounceTime(1200)
      );
    }

  constructor() {}
  ngOnInit() {}
}
