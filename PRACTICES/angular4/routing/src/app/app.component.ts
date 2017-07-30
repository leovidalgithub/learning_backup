import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  template: `
      <div class="container-fluid">
          <a [href]="link">Introduction to Angular Routing</a>
          <hr>
            <a [routerLink]="['/']">Home</a>
            <a [routerLink]="['/about']">About</a>
          <hr>
          <hr>
          <div [style.border]="'1px solid orange'" [style.padding]="'15px'">
            <router-outlet></router-outlet>
          </div>
      </div>
  `
})
export class AppComponent {
    link:string = 'https://coryrylan.com/blog/introduction-to-angular-routing';

    constructor() {}

}
