import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnexionAdminPageRoutingModule } from './connexion-admin-routing.module';

import { ConnexionAdminPage } from './connexion-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnexionAdminPageRoutingModule
  ],
  declarations: [ConnexionAdminPage]
})
export class ConnexionAdminPageModule {}
