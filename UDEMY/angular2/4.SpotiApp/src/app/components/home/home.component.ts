import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

  public newReleases: any[] = [];
  public loading: Boolean = false;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
      this.loading = true;
      this.spotifyService.getNewReleases()
      .pipe(
        delay(50)
        ).subscribe((data: any) => {
          this.newReleases = data;
          this.loading = false;
          })
  }

  ngOnDestroy(): void {
    console.log('HomeComponent ngOnDestroy');
  }
}
