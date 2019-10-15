import {Component, HostListener, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MyServiceService]
})
export class AppComponent implements OnInit {

    @ViewChild('myButton') myButton: ElementRef;

    title = 'app';
    public persons = [];
    constructor(private ss: MyServiceService, private render: Renderer2) {
        this.persons = ss.getData();
    }

    ngOnInit() {
        setTimeout(() => {
            this.render.addClass(this.myButton.nativeElement, 'my-class');
        }, 4100);
    }

  // @HostListener('click', ['$event'])
  //   bark(e) {
  //    console.log(e.target);
  // }

  // @HostListener("window:scroll", [])
  // onWindowScro() {
  //   console.log('scrolled');
  // }
  @HostListener('window:keydown', ['$event'])
    onWindowKeydown(event: KeyboardEvent) {
        console.log(event);
    }
  // @HostListener('window:resize', ['$event'])
  //   handleClick(event:Event) {
  //     console.log('resize');
  //   }
  // @HostListener('document:click', ['$event'])
  //   handleClick(event: Event) {
  //     console.log(event.target);
  //   }

}
