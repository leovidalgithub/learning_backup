import { Component, OnInit } from '@angular/core';
import { IData } from './../../shared/';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {
    public myValue:number = 0;

    constructor() { }

    ngOnInit() {
    }

}
