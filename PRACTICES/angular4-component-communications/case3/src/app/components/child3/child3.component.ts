import { Component, OnInit } from '@angular/core';
import { IData } from './../../shared/';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component implements OnInit {
    public myValue: number = 0;
    public myMsg: number;

    constructor() { }

    ngOnInit() {
    }

}
