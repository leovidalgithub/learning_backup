import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Child1Component, Child2Component } from './components/';
import { MyRendererDirectiveDirective } from './directives/my-renderer-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    MyRendererDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
