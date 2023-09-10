import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HinosPage } from './hinos.page';

const routes: Routes = [
  {
    path: '',
    component: HinosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HinosPageRoutingModule {}
