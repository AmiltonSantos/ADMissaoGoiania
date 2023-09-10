import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HinosPageRoutingModule } from './hinos-routing.module';

import { HinosPage } from './hinos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HinosPageRoutingModule
  ],
  declarations: [HinosPage]
})
export class HinosPageModule {}
