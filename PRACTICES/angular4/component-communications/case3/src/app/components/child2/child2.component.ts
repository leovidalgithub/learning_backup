import { Component, OnInit } from '@angular/core';
import { IData } from './../../shared/';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
    public myValue: number = 0;
    public myMsg: number;

    constructor() { }

    ngOnInit() {
    }

}
