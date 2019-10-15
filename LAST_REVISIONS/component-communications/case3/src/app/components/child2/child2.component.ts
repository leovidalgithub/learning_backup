import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
    public myValue = 0;
    public myMsg = 'It will be modified in brief';
    public child2Variable;

    @Input() child2Input: string
    public set value(v: string) {
        this.child2Variable = v;
    }
    public get value(): string {
        return this.child2Variable;
    }

    @Output() child2Output = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
        setTimeout(() => {
            this.child2Output.emit('Child2 @OutPut EventEmitter to app.component');
        }, 2400);
    }

        myMethod (): void { // este método es llamado desde app.component a través del objeto 'ViewChild child2'
          console.log('Method invoked from app.component thorugh ViewChild child2');
    }

}
