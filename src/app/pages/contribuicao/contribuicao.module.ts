import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContribuicaoPageRoutingModule } from './contribuicao-routing.module';

import { ContribuicaoPage } from './contribuicao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContribuicaoPageRoutingModule
  ],
  declarations: [ContribuicaoPage]
})
export class ContribuicaoPageModule {}
