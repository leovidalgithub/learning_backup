import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name:string = 'Fernando';
  name2:string = 'fernAndo alBErto heRRera jiméneZ';

  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a:number = 0.234;
  salario = 1234.5;

  heroe:object = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: '19'
    }
  }

  valorDePromesa = new Promise( (resolve,reject) => {
    setTimeout( () => resolve('Llegó la data!'), 3500);
  })

  fecha = new Date();
  urlVideo:string = 'RtU_mdL2vBM';

  nombre:string = 'Fernando';
  activar:boolean = true;

}
