import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgtemplateComponent } from './components/ngtemplate/ngtemplate.component';

const routes: Routes = [{ path: '', component: NgtemplateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgtemplateRoutingModule { }
