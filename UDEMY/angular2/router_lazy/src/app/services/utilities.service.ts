import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  public getRandomNumber(): number {
    return Math.floor((Math.random() * 100) + 1);
  }

}

export class myClass {
    static myFunc(): string {
      return 'I come from a static Function';
    }
}
