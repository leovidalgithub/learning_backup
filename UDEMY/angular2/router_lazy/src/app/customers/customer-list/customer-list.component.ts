import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

    private counter: number = 0;

  constructor() { }

  ngOnInit() {
      setInterval(() => {
          console.log(`Counter ${++this.counter}`);
      }, 3200);
  }

}
