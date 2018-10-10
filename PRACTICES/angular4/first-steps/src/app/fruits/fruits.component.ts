import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
    public cont: number = 0;
    public visible: Boolean = false;

    private thisName: String = 'Ian Mosley';

    public className: String = 'newClass';
    public    mySize: String = '26';

    public showMe = false;
    public serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    public enlace = 'http://dolartoday.leovidal.es';

    setPerson = () => {
        console.log('clicked');
    }
    pressMe() {
        this.visible = !this.visible;
        this.showMe = !this.showMe;
    }

    inputChanged(event) {
        console.log(event.target.value);
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

    constructor() {
      setInterval( () => {
          this.cont++;
      }, 1000);
    }

  ngOnInit() {}
}
