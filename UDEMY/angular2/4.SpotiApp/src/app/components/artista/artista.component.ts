import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

    public artista: any = {};
    public topTracks: any[] = [];
    public loading: Boolean = true;

    constructor(private activatedRoute: ActivatedRoute,
                private spotifyService: SpotifyService) {
        this.activatedRoute.params.subscribe(
            params => {
                this.getArtista(params.id);
                this.getTopTracks(params.id);
            })
    }

    private getArtista(id: String): void {
        this.spotifyService.getArtist(id)
        // .pipe(delay(3000))
        .subscribe(artista => {
            this.artista = artista;
            this.loading = false;
        });
    }

    private getTopTracks(id: string): void {
        this.spotifyService.geTopTracks(id)
            .subscribe(data => {
                this.topTracks = data;
            })
    }

}
