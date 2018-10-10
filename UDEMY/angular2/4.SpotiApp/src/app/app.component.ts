import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private http: HttpClient) {}
  ngOnInit() {
      this.http.get('http://localhost:3000/')
          .subscribe(data => {
            console.log('data', data);
          },
              (err) => {
                  console.log('err', err);
              },
              () => {
              });
  }
}
