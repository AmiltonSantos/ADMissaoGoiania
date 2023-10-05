import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsademigPage } from './usademig.page';

const routes: Routes = [
  {
    path: '',
    component: UsademigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsademigPageRoutingModule {}
