import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnexionAdminPage } from './connexion-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ConnexionAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnexionAdminPageRoutingModule {}
