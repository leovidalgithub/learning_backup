import { Component, OnInit } from '@angular/core';
import { of, timer, fromEvent, interval } from 'rxjs';
import { debounceTime, map, takeWhile, filter, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  public showResult;
  public stuffs;

  constructor() {}
  ngOnInit() {
    const input = document.getElementById('example');
        fromEvent(input, 'keyup')
        .pipe(
            map((element: any) => element.currentTarget.value),
            debounceTime(700),
            filter((val: String) => val.trim().length !== 0)
            // filter((val: String) => val.trim() !== '')
            )
            .subscribe(val => {
                console.log(val);
                this.showResult = val;
        },
        (err) => err,
        () => console.log('complete')
        );
    // const source = of(1, 2, 3, 4, 5, 3, 2, 1);
    // const example = source.pipe(takeWhile(val => val <= 4));
    // const subscribe = example.subscribe(val => console.log('v', val));
  }

    // fn() {
    //     interval(700)
    //         .pipe(
    //             timeout(801)
    //         )
    //         .subscribe(
    //             val => console.log(val),
    //             err => console.log('err'),
    //             () => console.log('complete!')
    //         );
    // }

}
