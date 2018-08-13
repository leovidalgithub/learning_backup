import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  buscarHeroe( termino: string, event: any ) {
    event.preventDefault();
    // console.log(event.target.value);
    this.router.navigate(['/buscar', termino]);
  }

  ngOnInit() {}

}

// $(function () {
//   $('form').submit(function () { return false; });
// });
