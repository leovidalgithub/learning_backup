import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/case1/app.component';
import { Case2Component } from './components/case2/case2.component';
import { Case3Component } from './components/case3/case3.component';
import { AsyncPromisePipeComponent } from './components/case1/components/promise-async/promise-async.component';

@NgModule({
  declarations: [
    AppComponent,
    Case2Component,
    Case3Component,
    AsyncPromisePipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
