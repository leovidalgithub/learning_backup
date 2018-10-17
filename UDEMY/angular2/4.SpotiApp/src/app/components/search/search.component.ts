import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, map, switchMap, filter, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  @ViewChild('termino') inputFocus: ElementRef;
  public artists: any[] = [];
  public loading: Boolean = false;

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) {}

  public buscar(term: String) {
    // if (term.trim() === '') {
    //   this.artists = [];
    //   return;
    // }
    // this.loading = true;
    // this.spotifyService.getArtist(term)
    //   .subscribe(data => {
    //     this.artists = data;
    //   },
    //     (err) => {
    //       console.log('err', err);
    //       this.artists = [];
    //     },
    //     () => { this.loading = false });
    }

    // **********************************************
    // finalize(() => console.log('finalize'))
    // **********************************************

    private startHearing() {
      const input = document.getElementById('searchInput');
      fromEvent(input, 'keyup')
        .pipe(
          map((element: any) => element.currentTarget.value),
          debounceTime(700),
          filter((val: String) => val.trim().length !== 0),
          switchMap(val =>
            this.spotifyService.getArtist(val)
          )
        )
        .subscribe(data =>
        //   this.artists = data,
          console.log('data', data),
          (err) => {
              this.artists = [];
            },
            () => {
                console.log('complete');
            //   this.loading = false;
          })
  }

  ngOnInit() {
    // focusing input
    this.inputFocus.nativeElement.focus();

    // receiving the resolve data from token.service and app.routes
    console.log(this.route.snapshot.data);

    this.startHearing();
  }

}
