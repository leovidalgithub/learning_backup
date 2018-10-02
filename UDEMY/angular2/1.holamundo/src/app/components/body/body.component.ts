import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  private myValue: number = 1;
  public frase: any = {
    mensaje : 'Un gran poder requiere una gran responsabilidad',
      autor : 'Ben Parker'
  };
  private mostrar: Boolean = true;
  private personajes: string[] = ['Spiderman', 'Venom', 'Dr. Octopus'];

  constructor() { }
  ngOnInit() {
     setInterval(() => {
       this.myValue++;
    }, 800);
  }
}
