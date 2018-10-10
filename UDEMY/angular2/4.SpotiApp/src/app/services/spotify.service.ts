import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  // private token: Object = {
  //   'grant_type': 'client_credentials',
  //   'client_id': '28d6fe31e6de4ebba620e1c16e2b1abe',
  //   'client_secret': '0eb56c71396c49b2a3bc917b25b04e80'
  // };
  constructor(private http: HttpClient) {
    // this.http.post('https://accounts.spotify.com/api/token', this.token)
    //   .subscribe(data => console.log(data));
  }

  private getQuery(query: String) {
    const url: string = `https://api.spotify.com/v1/${query}`;
    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': 'Bearer BQDFX-6e6SGLHuwvAOPbkCadQpwwWoLrPfNFq50I84_gOD8KfkmxPt_rbzFHDsXashntU2LmQfX9idpydFA'});
       return this.http.get(url, {headers});
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
