import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContribuicaoPage } from './contribuicao.page';

const routes: Routes = [
  {
    path: '',
    component: ContribuicaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContribuicaoPageRoutingModule {}
