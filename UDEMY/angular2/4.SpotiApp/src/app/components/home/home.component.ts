import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {

  public newReleases: any[] = [];
  public loading: Boolean = true;

  constructor(private spotifyService: SpotifyService) {}

    ngOnInit() {
        const random = Math.floor(Math.random() * (1200 - 300 + 1)) + 300;
        this.spotifyService.getNewReleases()
            .pipe(
                delay(random)
            )
            .subscribe((data: any) => {
                this.newReleases = data;
                this.loading = false;
            })
    }

  ngOnDestroy(): void {
    console.log('HomeComponent ngOnDestroy');
  }
}
