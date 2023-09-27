import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VersiculosPage } from './versiculos.page';

const routes: Routes = [
  {
    path: '',
    component: VersiculosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VersiculosPageRoutingModule {}
