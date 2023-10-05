import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UmademPageRoutingModule } from './umadem-routing.module';

import { UmademPage } from './umadem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UmademPageRoutingModule
  ],
  declarations: [UmademPage]
})
export class UmademPageModule {}
