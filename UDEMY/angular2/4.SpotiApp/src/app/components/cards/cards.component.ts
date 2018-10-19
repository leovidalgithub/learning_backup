import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input()
  public thisCards: any[] = [];

    constructor(private router: Router) {}
    ngOnInit() {}

    public verArtista(item: any) {
        let artistaId;
        if (item.type === 'artist') {
            artistaId = item.id;
        } else { // if type === 'album'
            artistaId = item.artists[0].id;
        }
        this.router.navigate(['/artist', artistaId]);
    }

}
