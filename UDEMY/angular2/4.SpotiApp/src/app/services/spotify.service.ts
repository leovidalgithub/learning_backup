import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';

import { map, switchMap, timeout, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  private getQuery(query: String) {
    const url = `https://api.spotify.com/v1/${query}`;
    return this.tokenService.getToken()
      .pipe(
        // timeout(1000),
        switchMap(token => {
          const headers: HttpHeaders = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });
          return this.http.get(url, { headers })
        })
      )
  }
// BQDzmOYOWbg6ypkLSWMnRwNKhrQiSKF-vLoj1uzYJL4m-8KerRTvn7j1h7li8_ZoGGoFosg8OV-DPh8HMEo
// https://api.spotify.com/v1/artists/2kCcBybjl3SAtIcwdWpUe3/top-tracks

  public getNewReleases() {
    return this.getQuery('browse/new-releases')
          .pipe(
            map((data: any) => data.albums.items));
  }

  public getArtists(termino: String) {
    return this.getQuery(`search?q=${termino}&type=track%2Cartist`)
      .pipe(map(data => data['artists'].items));
  }

  public getArtist(id: String) {
      return this.getQuery(`artists/${id}`);
  }

  public geTopTracks(id: String) {
      return this.getQuery(`artists/${id}/top-tracks?country=US`)
        .pipe(map((data: any) => data.tracks))
  }

}
