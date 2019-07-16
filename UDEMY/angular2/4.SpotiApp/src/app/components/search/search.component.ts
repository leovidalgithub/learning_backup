import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { fromEvent } from 'rxjs';
import { debounceTime, map, switchMap, filter, tap, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  @ViewChild('termino') inputFocus: ElementRef;
  public artists: any[] = [];
  public loading: Boolean = false;

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) {}

    private startHearing() {
      const input = document.getElementById('searchInput');
      fromEvent(input, 'keyup')
        .pipe(
          map((element: any) => element.currentTarget.value),
          debounceTime(700),
          filter((val: String) => val.trim().length !== 0), // let pass just when length > 0
          tap(() => this.loading = true),
          switchMap(val =>
            this.spotifyService.getArtists(val)
          ),
          tap(() => this.loading = false)
        )
        .subscribe(data =>
          this.artists = data,
          (err) => {
              console.log('err', err);
              this.artists = [];
            },
            () => {
                console.log('complete');
          })
  }

  ngOnInit() {
    this.inputFocus.nativeElement.focus(); // FOCUSING INPUT
    console.log(this.route.snapshot.data); // SHOWING INFO COMING FROM RESOLVE IN TOKEN.SERVICE AND APP.ROUTES
    this.startHearing(); // START LISTENING FOR KEYUP IN INPUT
  }

}

    // public buscar(term: String) {
    // if (term.trim() === '') {
    //   this.artists = [];
    //   return;
    // }
    // this.loading = true;
    // this.spotifyService.getArtist(term);
    // }
