import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BibliaPage } from './biblia.page';

const routes: Routes = [
  {
    path: '',
    component: BibliaPage
  },
  {
    path: 'livros',
    loadChildren: () => import('./livros/livros.module').then( m => m.LivrosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibliaPageRoutingModule {}
