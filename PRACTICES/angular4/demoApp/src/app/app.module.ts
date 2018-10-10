import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewChildDadComponent } from './components/view-child-dad/view-child-dad.component';
import { ViewChildSonComponent } from './components/view-child-son/view-child-son.component';
import { Directive1Directive } from './directives/directive1.directive';
import { Observable1Component } from './components/observable1/observable1.component';
import { Observable2Component } from './components/observable2/observable2.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewChildDadComponent,
    ViewChildSonComponent,
    Directive1Directive,
    Observable1Component,
    Observable2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
