import {Component, HostListener} from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MyServiceService]
})
export class AppComponent {
  title = 'app';
  private persons = [];
  constructor(private ss: MyServiceService) {
    this.persons = ss.getData();
    console.log(this.persons);
  }

  @HostListener('click', ['$event'])
    bark(e) {
     console.log(e.target);
  }

  // @HostListener("window:scroll", [])
  // onWindowScro() {
  //   console.log('scrolled');
  // }
  // @HostListener('window:resize', ['$event'])
  //   handleClick(event:Event) {
  //     console.log('resize');
  //   }
  // @HostListener('document:click', ['$event'])
  //   handleClick(event:Event) {
  //     console.log(event.target);
  //   }

}
