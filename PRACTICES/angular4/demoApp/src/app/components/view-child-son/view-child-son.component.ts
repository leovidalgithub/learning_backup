import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child-son',
  templateUrl: './view-child-son.component.html',
  styleUrls: ['./view-child-son.component.scss']
})
export class ViewChildSonComponent implements OnInit {

  public myVar: String = 'I am ViewChildSon';

  constructor() {}
  ngOnInit() {}

  myMethod(msg: string) {
    this.myVar = msg;
  }
}
