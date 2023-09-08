import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HarpaPage } from './harpa.page';

const routes: Routes = [
  {
    path: '',
    component: HarpaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HarpaPageRoutingModule {}
