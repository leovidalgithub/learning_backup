import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, fromEvent, Observable } from 'rxjs';
import { Service1Service } from '../../services/service1.service';

@Component({
  selector: 'app-observable1',
  templateUrl: './observable1.component.html',
  styleUrls: ['./observable1.component.scss']
})
export class Observable1Component implements OnInit {

  public message: any;
  public coords = {x: 0, y: 0};
  private subscription: Subscription = new Subscription();

  constructor(private messageService: Service1Service) {
    this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
    // let observable: Observable<any> = this.messageService.getMessage();
  }

  ngOnInit() {
    const element          = document.querySelector('#main');
    const mouseMoves       = fromEvent(element, 'mousemove');
    const thisSubscription = mouseMoves.subscribe((evt: MouseEvent) => {
      this.coords.x = evt.clientX;
      this.coords.y = evt.clientY;
      if (evt.clientX < 300 && evt.clientY < 300) {
        thisSubscription.unsubscribe();
      }
     });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
