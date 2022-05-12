import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccesAdminPage } from './acces-admin.page';

const routes: Routes = [
  {
    path: '',
    component: AccesAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccesAdminPageRoutingModule {}
