import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgtemplateRoutingModule } from './ngtemplate-routing.module';
import { NgtemplateComponent } from './components/example1/ngtemplate/ngtemplate.component';

import { ProjectedContentComponent } from './components/example1/projected-content/projected-content.component';
import { ShowDateComponent } from './components/example1/show-date/show-date.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
      NgtemplateComponent,
      ProjectedContentComponent,
      ShowDateComponent,
      MainComponent
    ],
  imports: [
    CommonModule,
    NgtemplateRoutingModule
  ]
})
export class NgtemplateModule { }
