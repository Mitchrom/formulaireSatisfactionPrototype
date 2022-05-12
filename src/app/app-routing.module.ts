import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: 'formulaire',
    loadChildren: () => import('./formulaire/formulaire.module').then( m => m.FormulairePageModule)
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./confirmation/confirmation.module').then( m => m.ConfirmationPageModule)
  },
  {
    path: 'acces-admin',
    loadChildren: () => import('./acces-admin/acces-admin.module').then( m => m.AccesAdminPageModule)
  },
  {
    path: 'connexion-admin',
    loadChildren: () => import('./connexion-admin/connexion-admin.module').then( m => m.ConnexionAdminPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'acces-admin-form-stats',
    loadChildren: () => import('./acces-admin-form-stats/acces-admin-form-stats.module').then( m => m.AccesAdminFormStatsPageModule)
  },
  {
    path: 'acces-admin-users-stats',
    loadChildren: () => import('./acces-admin-users-stats/acces-admin-users-stats.module').then( m => m.AccesAdminUsersStatsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
