import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

import { interval, of } from 'rxjs';
import { switchMap, delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  public artists: any[] = [];
  public loading: Boolean = false;

  constructor(private spotifyService: SpotifyService) {}

  buscar(term: String) {
    if (term.trim() === '') {
      this.artists = [];
      return;
    }
    this.loading = true;
    this.spotifyService.getArtist(term)
      .subscribe(data => {
        this.artists = data;
        },
        (err) => {
          console.log('err', err);
          this.artists = [];
        },
        () => { this.loading = false });
  }

  ngOnInit() {
    // //emit immediately, then every 5s
    // const source = timer(0, 5000);
    // //switch to new inner observable when source emits, emit items that are emitted
    // const example = source.pipe(switchMap(() => interval(500)));
    // //output: 0,1,2,3,4,5,6,7,8,9...0,1,2,3,4,5,6,7,8
    // const subscribe = example.subscribe(val => console.log(val));
  // *********************************************************************************************** */
// console.log('simulating HTTP requests');
// const http1$ = this.simulateHttp('1', 3000);
// const http2$ = this.simulateHttp('2', 5000);
// http1$.subscribe(
//   console.log,
//   console.error,
//   () => console.log('http1$ completed')
//   );
//   http2$.subscribe(
//     console.log,
//     console.error,
//     () => console.log('http2$ completed')
//     );
    // *********************************************************************************************** */
    // // const saveUser$ = this.simulateHttp('user saved', 2700);
    // const httpResult$ = this.simulateHttp('user saved', 2700).pipe(
      //   switchMap(sourceValue => {
        //     console.log('*1*', sourceValue);
    //     return this.simulateHttp('data reloaded', 3000);
    //   })
    // );
    // httpResult$.subscribe(
    //   (val) => console.log('*2*', val),
    //   console.error,
    //   () => console.log('completed httpResult$')
    // );
    // *********************************************************************************************** */
    // const firebase1$ = this.simulateFirebase('FB-1 ', 5000);
    // const firebase2$ = this.simulateFirebase('FB-2 ', 1000);

    // firebase1$.subscribe(
    //   console.log,
    //   console.error,
    //   () => console.log('firebase1$ completed')
    // );

    // firebase2$.subscribe(
    //   console.log,
    //   console.error,
    //   () => console.log('firebase2$ completed')
    // );
  }

  // simulateHttp(val: any, _delay: number) {
  //   return of(val).pipe(
  //       delay(_delay)
  //   );
  // }
  // simulateFirebase(val: any, _delay: number) {
  //   return interval(_delay).pipe(
  //     map(index => val + ' * ' + index)
  //   )
  // }

}
