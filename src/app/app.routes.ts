import { ExtraOptions, PreloadAllModules, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import { UserComponent } from './user/user.component';
import { SoldeComponent } from './solde/solde.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { DemandeComponent } from './demande/demande.component';

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
  { path: 'user',
    component: UserComponent},
  { path: 'demande',
    component: DemandeComponent},
  { path: 'solde',
    component: SoldeComponent},
  { path: 'consultation',
    component: ConsultationComponent},
 { path: 'password',
    component: PasswordFormComponent},


  {
    path: '**',
    redirectTo: 'home'
  }
]

export const APP_EXTRA_OPTIONS: ExtraOptions = {
  preloadingStrategy: PreloadAllModules
}
