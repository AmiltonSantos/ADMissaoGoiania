import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CongregacoesPageRoutingModule } from './congregacoes-routing.module';

import { CongregacoesPage } from './congregacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CongregacoesPageRoutingModule
  ],
  declarations: [CongregacoesPage]
})
export class CongregacoesPageModule {}
