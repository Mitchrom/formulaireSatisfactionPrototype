import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccesAdminUsersStatsPageRoutingModule } from './acces-admin-users-stats-routing.module';

import { AccesAdminUsersStatsPage } from './acces-admin-users-stats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccesAdminUsersStatsPageRoutingModule
  ],
  declarations: [AccesAdminUsersStatsPage]
})
export class AccesAdminUsersStatsPageModule {}
