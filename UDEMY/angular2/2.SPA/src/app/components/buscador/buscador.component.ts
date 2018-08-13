import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, iHeroe } from './../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
  providers: [HeroesService]
})
export class BuscadorComponent implements OnInit {

  heroes: iHeroe[];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private hs: HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this.hs.buscarHeroes( params['termino']);
    })
  }

}
