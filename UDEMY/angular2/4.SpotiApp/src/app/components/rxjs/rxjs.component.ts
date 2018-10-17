import { Component, OnInit } from '@angular/core';
import { of, timer, fromEvent } from 'rxjs';
import { debounceTime, map, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  public showResult;
  constructor() {}

  ngOnInit() {
    const input = document.getElementById('example');
        fromEvent(input, 'keyup')
        .pipe(
            map((element: any) => element.currentTarget.value),
            debounceTime(700)
            )
            .subscribe(val => {
                this.showResult = val;
        });

    // const source = of(1, 2, 3, 4, 5, 3, 2, 1);
    // const example = source.pipe(takeWhile(val => val <= 4));
    // const subscribe = example.subscribe(val => console.log('v', val));
  }

  }
