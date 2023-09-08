import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CongregacoesPage } from './congregacoes.page';

const routes: Routes = [
  {
    path: '',
    component: CongregacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CongregacoesPageRoutingModule {}
