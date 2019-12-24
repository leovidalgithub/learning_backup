import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent, HeroesComponent } from './components';

const routes: Routes = [
    {
        path: 'customers',
        loadChildren: 'src/app/modules/customers/customers.module#CustomersModule'
    },
    {
        path: 'orders',
        loadChildren: 'src/app/modules/orders/orders.module#OrdersModule'
    },
    {
        path: 'ngtemplate',
        loadChildren: './modules/ngtemplate/ngtemplate.module#NgtemplateModule'
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    { path: 'heroes', pathMatch: 'full', component: HeroesComponent, data: { title: 'This title' } },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];
// { path: 'ngtemplate', loadChildren: () => import('./modules/ngtemplate/ngtemplate.module').then(m => m.NgtemplateModule) }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
