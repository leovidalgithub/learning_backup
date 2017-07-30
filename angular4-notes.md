# ANGULAR 4 TIPS

### API List Reference
https://angular.io/api

### new html tags attributes
https://angular.io/guide/cheatsheet

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

```html
```
