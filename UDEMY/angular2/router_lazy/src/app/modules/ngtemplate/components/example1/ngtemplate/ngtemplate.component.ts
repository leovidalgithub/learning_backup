import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { createViewChild } from '@angular/compiler/src/core';

@Component({
  selector: 'app-ngtemplate',
  templateUrl: './ngtemplate.component.html',
  styleUrls: ['./ngtemplate.component.scss']
})
export class NgtemplateComponent implements OnInit, AfterViewInit {
    public condition = true;
    public myProp = 0;

    @ViewChild('viewChild1', { static: false }) viewChild1: ElementRef;

    public myVariacitaLocal = 456;
    public contextObj = {
        $implicit: '$implicit value',
        donut: 'donut: Old fashioned glazed',
        cafe: 'cafe: El cafecito bien bueno'
    };

    constructor(private render: Renderer2) {}

    ngOnInit(): void {
      setInterval(() => {
        this.condition = !this.condition;
      }, 2500);
      setInterval(() => {
        this.myProp += 5;
      }, 6500);
    }
// UDEMY\angular2\router_lazy\src\app\modules\ngtemplate\components\ngtemplate
    ngAfterViewInit() {
      this.render.setStyle(this.viewChild1.nativeElement, 'color', 'gray');
      this.render.addClass(this.viewChild1.nativeElement, 'myNewClassAdded');
    }

}
