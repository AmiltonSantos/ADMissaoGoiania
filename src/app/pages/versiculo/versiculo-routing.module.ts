import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VersiculoPage } from './versiculo.page';

const routes: Routes = [
  {
    path: '',
    component: VersiculoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VersiculoPageRoutingModule {}
