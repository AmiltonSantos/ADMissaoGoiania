import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeituraPage } from './leitura.page';

const routes: Routes = [
  {
    path: '',
    component: LeituraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeituraPageRoutingModule {}
