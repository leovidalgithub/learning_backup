import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialTools1Component } from './components/material-tools1/material-tools1.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialTools1Component
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
