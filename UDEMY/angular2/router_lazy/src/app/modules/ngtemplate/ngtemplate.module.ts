import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgtemplateRoutingModule } from './ngtemplate-routing.module';
import { NgtemplateComponent } from './components/ngtemplate/ngtemplate.component';

import { ProjectedContentComponent } from './components/projected-content/projected-content.component';
import { ShowDateComponent } from './components/show-date/show-date.component';

@NgModule({
  declarations: [
      NgtemplateComponent,
      ProjectedContentComponent,
      ShowDateComponent
    ],
  imports: [
    CommonModule,
    NgtemplateRoutingModule
  ]
})
export class NgtemplateModule { }
