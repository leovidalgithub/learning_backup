import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, iHeroe } from './../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
  providers: [HeroesService]
})
export class HeroeComponent implements OnInit {

  heroe: iHeroe;

  constructor( private ss: HeroesService,
               private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( params => {
      const heroeId = params['id'];
      this.heroe = this.ss.getHeroe(heroeId);
    })

   }

  ngOnInit() { }

}
