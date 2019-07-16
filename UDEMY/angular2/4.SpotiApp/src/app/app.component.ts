import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

//   constructor(private http: HttpClient, private ss: TokenService) {}
}
// https://alligator.io/angular/route-resolvers/
// ng serve--live - reload
