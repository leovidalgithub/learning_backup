import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService, IHeroe } from './../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroesService]
})
export class HeroesComponent implements OnInit {

  heroes:IHeroe[];

  constructor(private ss:HeroesService,
            private router:Router) { }

  ngOnInit() {
    this.heroes = this.ss.getHeroes();
  }

  verHeroe(idx:number) {
    this.router.navigate(['/heroe',idx]);
  }

}
