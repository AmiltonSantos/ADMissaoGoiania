import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'biblia',
    loadChildren: () => import('./pages/biblia/biblia.module').then( m => m.BibliaPageModule)
  },
  {
    path: 'devocional',
    loadChildren: () => import('./pages/devocional/devocional.module').then( m => m.DevocionalPageModule)
  },
  {
    path: 'congregacoes',
    loadChildren: () => import('./pages/congregacoes/congregacoes.module').then( m => m.CongregacoesPageModule)
  },
  {
    path: 'versiculo',
    loadChildren: () => import('./pages/versiculo/versiculo.module').then( m => m.VersiculoPageModule)
  },
  {
    path: 'estudos',
    loadChildren: () => import('./pages/estudos/estudos.module').then( m => m.EstudosPageModule)
  },
  {
    path: 'curso',
    loadChildren: () => import('./pages/curso/curso.module').then( m => m.CursoPageModule)
  },
  {
    path: 'contribuicao',
    loadChildren: () => import('./pages/contribuicao/contribuicao.module').then( m => m.ContribuicaoPageModule)
  },
  {
    path: 'noticia',
    loadChildren: () => import('./pages/noticia/noticia.module').then( m => m.NoticiaPageModule)
  },
  {
    path: 'harpa',
    loadChildren: () => import('./pages/harpa/harpa.module').then( m => m.HarpaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
