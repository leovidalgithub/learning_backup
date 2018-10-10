import { Directive, HostBinding, HostListener, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appDirective1]'
})
export class Directive1Directive implements OnInit, OnDestroy {
  @Output() evenEmitter = new EventEmitter();
  private subject = new Subject<number>();
  private numberOfHovers: number = 1;

  @HostBinding('style.border') border: string;
  @HostBinding('class.myClass') addClass: Boolean = false;

  @HostListener('mouseover', ['$event.target'])
    thisMouseOverFunction(btn) {
      this.border = '1px solid orange';
      this.addClass = true;
      this.subject.next(this.numberOfHovers++);
    }

  @HostListener('mouseout')
    thisMouseOutFunction() {
      this.border = '1px solid green';
      this.addClass = false;
    }
    constructor() {}
    ngOnInit(): void {
      const observable: Observable<number> = this.subject.pipe(
        debounceTime(550)
      );
      observable.subscribe((v) => {
        this.evenEmitter.emit({v: v});
      });
    }

    ngOnDestroy(): void {
      this.subject.unsubscribe();
    }
}
