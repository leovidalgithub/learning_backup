import { Component, OnInit } from '@angular/core';
import { HeroesService, iHeroe } from './../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: []
})
export class HeroesComponent implements OnInit {

  public heroes: iHeroe[];

  constructor(
        private ss: HeroesService
      ) { }

  ngOnInit() {
      this.heroes = this.ss.getHeroes();
  }

  myEvent(event) {
    console.log('From my son', event);
  }

}
