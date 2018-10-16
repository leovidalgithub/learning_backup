import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  @ViewChild('termino') inputFocus: ElementRef;
  public artists: any[] = [];
  public loading: Boolean = false;

  constructor(private spotifyService: SpotifyService, private route: ActivatedRoute) {}

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
    // focusing input
    this.inputFocus.nativeElement.focus();

    // receiving the resolve data from token.service and app.routes
    console.log(this.route.snapshot.data);
  }

}
