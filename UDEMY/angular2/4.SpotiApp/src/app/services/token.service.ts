import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { of, Observable } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenService implements Resolve<Observable<String>> {
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

  // using this resolve in app.routes for search component path
  resolve() {
    return of('500ms wait on resolve for Search Component')
            .pipe(delay(500));
  }
}
