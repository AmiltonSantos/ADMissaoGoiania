import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VersiculoPageRoutingModule } from './versiculo-routing.module';

import { VersiculoPage } from './versiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VersiculoPageRoutingModule
  ],
  declarations: [VersiculoPage]
})
export class VersiculoPageModule {}
