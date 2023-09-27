import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VersiculosPageRoutingModule } from './versiculos-routing.module';

import { VersiculosPage } from './versiculos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VersiculosPageRoutingModule
  ],
  declarations: [VersiculosPage]
})
export class VersiculosPageModule {}
