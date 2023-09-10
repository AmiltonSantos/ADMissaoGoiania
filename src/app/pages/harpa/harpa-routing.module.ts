import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HarpaPage } from './harpa.page';

const routes: Routes = [
  {
    path: '',
    component: HarpaPage
  },
  {
    path: 'hinos',
    loadChildren: () => import('./hinos/hinos.module').then( m => m.HinosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HarpaPageRoutingModule {}
