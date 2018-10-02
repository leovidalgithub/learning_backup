import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent, HeroesComponent } from './components';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: 'src/app/customers/customers.module#CustomersModule'
  },
  {
    path: 'orders',
    loadChildren: 'src/app/orders/orders.module#OrdersModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
    { path: 'heroes', pathMatch: 'full', component: HeroesComponent, data: { title: 'This title' } },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
