import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccesAdminUsersStatsPage } from './acces-admin-users-stats.page';

const routes: Routes = [
  {
    path: '',
    component: AccesAdminUsersStatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccesAdminUsersStatsPageRoutingModule {}
