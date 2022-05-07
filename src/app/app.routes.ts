import { ExtraOptions, PreloadAllModules, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './conges/login/login.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },

  { path: 'login',
    component: LoginComponent},
  {
    path: '**',
    redirectTo: 'home'
  }
]

export const APP_EXTRA_OPTIONS: ExtraOptions = {
  preloadingStrategy: PreloadAllModules
}
