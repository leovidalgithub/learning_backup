import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

    // private url = 'https://open.spotify.com/embed/track/';
    constructor(private domSanitizer: DomSanitizer) { }

    // transform(value: string): any {
    //     return this.domSanitizer.bypassSecurityTrustResourceUrl(this.url + value);
    // }
    transform(value: string, url: string): any {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
    }

}
