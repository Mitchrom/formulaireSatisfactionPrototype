import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccesAdminFormStatsPageRoutingModule } from './acces-admin-form-stats-routing.module';

import { AccesAdminFormStatsPage } from './acces-admin-form-stats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccesAdminFormStatsPageRoutingModule
  ],
  declarations: [AccesAdminFormStatsPage]
})
export class AccesAdminFormStatsPageModule {}
