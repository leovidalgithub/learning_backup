import { Component, OnInit, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { ChildComponent } from './components';
import { MyClass } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MyClass]
})
export class AppComponent implements OnInit, AfterViewInit {

    public shouldShow = true; // to show/hide third child.component

    @ViewChildren(ChildComponent) query: QueryList<ChildComponent>; // using directly the child component class name

    constructor() {}
    ngOnInit() {}

    childFunction() {
        this.query.forEach((item: ChildComponent) => item.exampleFunction());
    }

    printQueryList() {
        console.log('********************');
        this.query.forEach((item: ChildComponent) => console.log(item));
    }

    toggleChild() {
          this.shouldShow = !this.shouldShow;
    }

    ngAfterViewInit() {
        this.query.changes.subscribe((items: Array<ChildComponent>) => {
            console.log('********************');
            this.query.forEach((item: ChildComponent) => console.log(item));
        })
     }

 }
