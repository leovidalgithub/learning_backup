import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  public artists: any[] = [];
  public loading: Boolean = false;

  constructor(private spotifyService: SpotifyService) { }

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
      () => {
        this.loading = false;
        console.log('Complete');
      });
  }

}
