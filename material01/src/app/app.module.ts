import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';

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
      MatSliderModule,
      MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
