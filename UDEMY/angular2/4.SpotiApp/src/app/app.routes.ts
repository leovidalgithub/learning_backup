import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { TokenService } from './services/token.service';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'rxjs', component: RxjsComponent },
    { path: 'artist/:id', component: ArtistaComponent },
    { path: 'search', component: SearchComponent, resolve: { msg: TokenService } },
//  { path: 'search', component: SearchComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: false } );
