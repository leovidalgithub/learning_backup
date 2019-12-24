import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgtemplateComponent } from './components/example1/ngtemplate/ngtemplate.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
    {
      path: '', component: MainComponent, children: [
        { path: 'example1', component: NgtemplateComponent }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgtemplateRoutingModule { }
