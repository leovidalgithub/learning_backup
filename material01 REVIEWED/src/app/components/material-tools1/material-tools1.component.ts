import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-material-tools1',
  templateUrl: './material-tools1.component.html',
  styleUrls: ['./material-tools1.component.scss']
})
export class MaterialTools1Component implements OnInit {
    checked = false;

    @Input() myChildString: string;
    @Input() myChildBoolean: boolean = false;
    @Input() myChildInteger: number;

    constructor() { }
  ngOnInit() {
      setInterval(() => {
          this.myChildBoolean = !this.myChildBoolean;
          this.checked = !this.checked;
      }, 800);
  } 

}
