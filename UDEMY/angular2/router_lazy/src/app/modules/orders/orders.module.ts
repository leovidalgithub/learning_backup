import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderNewComponent } from './components/order-new/order-new.component';
import { InitialServiceService } from './initial-service.service';


@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  declarations: [OrderListComponent, OrderNewComponent],
  providers: [InitialServiceService]
})
export class OrdersModule { }
