import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccesAdminPageRoutingModule } from './acces-admin-routing.module';

import { AccesAdminPage } from './acces-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccesAdminPageRoutingModule
  ],
  declarations: [AccesAdminPage]
})
export class AccesAdminPageModule {}
