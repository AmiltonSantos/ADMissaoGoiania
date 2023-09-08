import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HarpaPageRoutingModule } from './harpa-routing.module';

import { HarpaPage } from './harpa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HarpaPageRoutingModule
  ],
  declarations: [HarpaPage]
})
export class HarpaPageModule {}
