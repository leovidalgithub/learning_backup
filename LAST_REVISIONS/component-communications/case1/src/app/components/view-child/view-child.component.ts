import { Component, Directive, Input, ViewChild } from '@angular/core';

@Directive({selector: 'pane'})
export class PaneDirective {
  @Input() id: string;
}

@Component({
  selector: 'app-view-child',
    template: `
    <div id="myDiv">
      <pane [id]="myVar" *ngIf="shouldShow">pane 1</pane>
      <pane id="PaneDirective @Input id - showing Pane 2" *ngIf="!shouldShow">pane 2</pane>
      <br>
      <button (click)="toggle()">Toggle Panes</button>
      <div>Selected: {{selectedPane}}</div>
    </div>
    `,
  styles: [` #myDiv { border: 1px solid crimson; margin: 20px; font-size: 1.4rem; padding: 12px; } `]
})
export class ViewChildComponent {

    public myVar = 'PaneDirective @Input id - showing Pane 1';
    public selectedPane = '';
    public shouldShow = false;

  @ViewChild(PaneDirective, { static: false })
    set pane(v: PaneDirective) {
        setTimeout(() => {
            this.selectedPane = v.id;
        }, 1000);
    }

    toggle() { this.shouldShow = !this.shouldShow; }

}
