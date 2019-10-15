import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ViewChildSonComponent } from '../view-child-son/view-child-son.component';

@Component({
  selector: 'app-view-child-dad',
  templateUrl: './view-child-dad.component.html',
  styleUrls: ['./view-child-dad.component.scss']
})
export class ViewChildDadComponent implements OnInit {
  @ViewChild(ViewChildSonComponent, {static: false}) firstSonFound: ViewChildSonComponent; // since there are more than one app-son, it will get the first found
    @ViewChild('son2', { static: false }) mySon2: ViewChildSonComponent;
    @ViewChildren(ViewChildSonComponent) allMySons: QueryList<ViewChildSonComponent>; // object with all ViewChildSonComponent found

  public numberOfHovers: Number = 0;
  public fn(v: any): void {
    this.numberOfHovers = v.v;
  }

  constructor() {}

  myFunction1() {
    this.mySon2.myMethod('New msg from Daddy');
  }
  myFunction2() {
    this.firstSonFound.myMethod('New msg for the first son found');
  }
  myFunction3() {
    this.allMySons.forEach((item: ViewChildSonComponent) => {
      item.myMethod('Msg updated using @ViewChildren for everybody');
    });
  }
  ngOnInit() { }
  // ngAfterViewInit() { }

}
