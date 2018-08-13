import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name: String = 'Fernando';
  name2: String = 'fernAndo alBErto heRRera jiméneZ';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a: Number = 0.234;
  salario = 1234.5;

  heroe: Object = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: '19'
    }
  }

  valorDePromesa = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('Llegó la data!'), 4500);
  })

  fecha = new Date();
  urlVideo: String = 'SGP6Y0Pnhe4';
  // urlVideo: String = 'RtU_mdL2vBM';
  // https://www.youtube.com/watch?v=SGP6Y0Pnhe4
  // https://www.youtube.com/watch?v=RtU_mdL2vBM

  nombre: String = 'Fernando';
  activar: Boolean = true;

}
