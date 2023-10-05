import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemadmigPageRoutingModule } from './semadmig-routing.module';

import { SemadmigPage } from './semadmig.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemadmigPageRoutingModule
  ],
  declarations: [SemadmigPage]
})
export class SemadmigPageModule {}
