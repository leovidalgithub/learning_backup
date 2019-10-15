import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';

import { CountingDirective, LeoComponent, SonComponent } from './counting.directive';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CountingDirective,
    LeoComponent,
    SonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
