import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { iHeroe } from './../../services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() public heroe_tarjeta: iHeroe;
  @Input() public idx: number;
  @Output() mySonEvent: EventEmitter<string> = new EventEmitter<string>();
  private counter: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    setInterval(() => {
      this.mySonEvent.emit(`every 5 seconds # ${this.counter++}`);
      }, 5000);
    }

  public verHeroe() {
    this.router.navigate(['/heroe', this.idx]);
  }
}
