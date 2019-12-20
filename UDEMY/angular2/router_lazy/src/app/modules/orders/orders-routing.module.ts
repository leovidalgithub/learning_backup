import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderListComponent } from './order-list/order-list.component';
import { OrderNewComponent } from './components/order-new/order-new.component';

const routes: Routes = [
    {
    path: '',
    component: OrderListComponent,
    children: [
        {
        path: 'new',
        component: OrderNewComponent
        }
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
