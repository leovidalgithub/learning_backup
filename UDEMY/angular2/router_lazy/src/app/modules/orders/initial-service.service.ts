import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InitialServiceService {
  private var: string;

  constructor() { this.var = 'Pendejo'; }

  public getVar(): string {
    return this.var;
  }
}
