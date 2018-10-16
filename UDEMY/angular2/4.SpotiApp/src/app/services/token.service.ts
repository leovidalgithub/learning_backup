import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private access_token: String;

  constructor(private http: HttpClient) {}

  getToken(): Observable<String> {
      if (!this.access_token) {
        return this.http.get('http://localhost:5000/spotifyToken')
          .pipe(
                  tap(val => { this.access_token = val['access_token'] }),
                  map((val: any) => val.access_token)
          )
    } else {
      return of(this.access_token);
    }
  }
}
