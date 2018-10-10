import { Component, OnInit } from '@angular/core';
import { InitialServiceService } from '../initial-service.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  myVar: string;
  constructor(private ss: InitialServiceService) { }

  ngOnInit() {
    this.myVar = this.ss.getVar();
  }

}
