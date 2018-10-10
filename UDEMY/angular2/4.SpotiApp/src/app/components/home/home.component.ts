import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public newReleases: any[] = [];
  public loading: Boolean = false;

  constructor(private spotifyService: SpotifyService) {}

    ngOnInit() {
      this.loading = true;
      this.spotifyService.getNewReleases()
      .pipe(
        delay(100)
        ).subscribe((data: any) => {
          this.newReleases = data;
          this.loading = false;
            });
  }
}
