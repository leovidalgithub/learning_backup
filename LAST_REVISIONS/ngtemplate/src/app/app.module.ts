import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectedContentComponent } from './projected-content/projected-content/projected-content.component';
import { ShowDateComponent } from './show-date/show-date/show-date.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectedContentComponent,
    ShowDateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
