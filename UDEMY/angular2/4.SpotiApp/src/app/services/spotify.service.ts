import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';

import { map, switchMap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  private getQuery(query: String) {
    const url = `https://api.spotify.com/v1/${query}`;
    return this.tokenService.getToken()
      .pipe(
        switchMap(token => {
          const headers: HttpHeaders = new HttpHeaders({
            'Authorization': `Bearer ${token}`
          });
          return this.http.get(url, { headers })
        })
      )
  }

  public getNewReleases() {
    return this.getQuery('browse/new-releases')
          .pipe(map((data: any) => data.albums.items ));
  }

  public getArtist(termino: String) {
    return this.getQuery(`search?q=${termino}&type=track%2Cartist`)
      .pipe(map(data => data['artists'].items ));
  }

}
