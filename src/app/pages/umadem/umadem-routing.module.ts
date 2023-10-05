import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UmademPage } from './umadem.page';

const routes: Routes = [
  {
    path: '',
    component: UmademPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UmademPageRoutingModule {}
