import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, todas: boolean = true, ...args: any[]): string {

      console.log('CAPITALIZADO pipe Args : ');
      console.log(args);
      console.log('todas', todas);

      value = value.toLowerCase();
      const nombres = value.split(' ');

      if( todas ) {
          for( let i in nombres ) {
              nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
          }
      } else {
          nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
      }

      return nombres.join(' ');
  }

}
