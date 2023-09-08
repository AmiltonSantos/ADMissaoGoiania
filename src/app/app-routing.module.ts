import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'biblia',
    loadChildren: () => import('./biblia/biblia.module').then( m => m.BibliaPageModule)
  },
  {
    path: 'devocional',
    loadChildren: () => import('./devocional/devocional.module').then( m => m.DevocionalPageModule)
  },
  {
    path: 'congregacoes',
    loadChildren: () => import('./congregacoes/congregacoes.module').then( m => m.CongregacoesPageModule)
  },
  {
    path: 'versiculo',
    loadChildren: () => import('./versiculo/versiculo.module').then( m => m.VersiculoPageModule)
  },
  {
    path: 'estudos',
    loadChildren: () => import('./estudos/estudos.module').then( m => m.EstudosPageModule)
  },
  {
    path: 'curso',
    loadChildren: () => import('./curso/curso.module').then( m => m.CursoPageModule)
  },
  {
    path: 'contribuicao',
    loadChildren: () => import('./contribuicao/contribuicao.module').then( m => m.ContribuicaoPageModule)
  },
  {
    path: 'noticia',
    loadChildren: () => import('./noticia/noticia.module').then( m => m.NoticiaPageModule)
  },
  {
    path: 'harpa',
    loadChildren: () => import('./harpa/harpa.module').then( m => m.HarpaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
