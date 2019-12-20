import { Routes } from '@angular/router';
import { HomeComponent, AboutComponent,
         AboutHomeComponent, AboutItemComponent } from './primaryComponents/components.component';
import { GroupComponent } from './groupComponents/group.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent, outlet: 'sidebar',
        children: [
            { path: '', component: AboutHomeComponent },
            { path: 'item/:id', component: AboutItemComponent },
            { path: 'group', component: GroupComponent }
        ]
    },
    { path: '**', redirectTo: 'home' }
]
