import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-show-date',
  templateUrl: './show-date.component.html',
  styleUrls: ['./show-date.component.scss']
})
export class ShowDateComponent implements OnInit {

    public todayDate;

  constructor() {
      this.todayDate = moment();
  }

  ngOnInit() {}

}
