# ANGULAR NOTES

### API List Reference
https://angular.io/api

### new html tags attributes
https://angular.io/guide/cheatsheet

```bash
this is a bash console based on unix/mac
```

```html
<div [class]="clase">
<div [hidden]="visible">

<div (click)="pressMe()">

<a [href]="enlace">

<input [(ngModel)]="selectModel" />
```

```html
<div *ngIf="showMe ; else noServer">
<ng-template #noServer>
  <p>Show this instead</p>
</ng-template>
```

```html
<h3 [ngStyle]="{backgroundColor: getColor()}">{{var1}}</h3>
<div [style.color]="'white'" [style.width.px]="myValue"
<div [ngStyle]="setStyles()">
    setStyles() {
        let styles = {
            'font-style': this.someProperty ? 'italic' : 'normal;
            'font-weight': this.anotherProperty ? 'bold' : 'normal;
        }
    }
```

```html
<router-outlet></router-outlet>
```
```html
<li class="nav-item" routerLinkActive="active">
    <a class="nav-link" [routerLink]="['home']">Home</a>
</li>
[routerLink]="['/app','home','33'] -> 'localhost:8080/app/home/33'
[routerLink]="['home'] -> 'localhost:8080/heroes/home'
[routerLink]="['/home'] -> 'localhost:8080/home'
```
```html
<div *ngFor="let heroe of heroes; let idx = index">
    <img [src]="heroe.img" [alt]="heroe.nombre">
```
```html
<h1>{{heroe.name | uppercase}} <small>({{heroe.myDate | date : 'y'}})</small></h1>
```

```html
<input (keyup.enter)="search()">
<input #newHero
       (keyup.enter)="addHero(newHero.value)"
       (blur)="addHero(newHero.value); newHero.value='' ">
<button (click)="addHero(newHero.value)">Add</button>
```

```html
<input #phone placeholder="phone number">
<button (click)="callPhone(phone.value)">Call</button>
```

```html
elvis operator
<dd>{{user?.age}}</dd>
```

### CSS Class

```html
    <div [className]="'style1'"></div>
    <div [className]="myClassVar"></div>
    <div [class.active]="isActive"></div>
    <div [ngClass]="myClasses"></div>
    myClasses = {
      important: this.isImportant,
      inactive: !this.isActive,
      saved: this.isSaved,
      long: this.name.length > 6
    };

    <div [ngClass]="setMyClasses()"></div>
    setMyClasses() {
      let classes = {
        important: this.isImportant,
        inactive: !this.isActive,
        saved: this.isSaved,
        long: this.name.length > 6
      };
      return classes;
    };

    <div [ngClass]="['style1', 'style2']">array of classes</div>
    <div [ngClass]="'style1 style2'">string of classes</div>
    <div [ngClass]="{'style1': true, 'style2': true}">object of classes</div>
```

## @Directives @HostBinding & @HostListener
For Directives, there are plenty ways of selectors
```typescript
@Directive({ selector: '[myCounting]' })
@HostBinding('style.border') border: string;
@HostBinding('class.myClass') addClass: Boolean = false;

@HostListener('mouseover', ['$event.target'])
    thisMouseOverFunction(element) {
        this.border   = '1px solid orange';
        this.addClass = true;
    }
@HostListener('mouseout')
    thisMouseOutFunction() { this.border = 'none'; }

```

## DOM Manipulation with ElementRef & Renderer2
To manipulate the DOM the same way we used to do with jQuery
**project** : Directive-HostListener
```typescript
import {ElementRef, Renderer2} from '@angular/core';

constructor(private element: ElementRef, private renderer: Renderer2) {}

this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.getColor());
```
**Renderer2** has several methods to work with (addClass, removeClass, insertAfter, etc.)

## @Viewchild() & @ViewChildren
**project** : Directive-HostListener
**@Viewchild()** just works with the first element found\
note: **myMethod()** is defined within OtherComponent
```typescript
@Component({
    template: `
    <button #thisButton>Click</button>
    <app-otherComponent #other1></app-otherComponent>
    <app-otherComponent #other2></app-otherComponent>`,
})
export class LeoComponent implements AfterViewInit, OnInit {
    @ViewChild('myButton') myButton: ElementRef;
    @ViewChild(OtherComponent) firstOtherFound: OtherComponent;
    @ViewChild('other2') myOther2: OtherComponent;
    @ViewChildren(OtherComponent) allMyOthers: QueryList<OtherComponent>;
    myFunction() {
        this.render.setStyle(this.myButton.nativeElement, 'backgroundColor', this.getRandomColor());
        this.firstOtherFound.myMethod('New msg for the first son found');
        this.myOther2.myMethod('New msg from Daddy');
        this.allMyOthers.forEach((item: OtherComponent) => {
            item.myMethod('Msg updated using @ViewChildren for everybody');
        });
    }
```
