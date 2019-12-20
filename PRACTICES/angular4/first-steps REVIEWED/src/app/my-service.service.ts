import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MyService {

  constructor() { }

  sayHello() {
      return 'MyService!';
  }

}
