import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivrosPage } from './livros.page';

const routes: Routes = [
  {
    path: '',
    component: LivrosPage
  },
  {
    path: 'versiculos',
    loadChildren: () => import('./versiculos/versiculos.module').then( m => m.VersiculosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivrosPageRoutingModule {}
