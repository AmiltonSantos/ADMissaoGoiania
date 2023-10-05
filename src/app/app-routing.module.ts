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
  {
    path: 'radio',
    loadChildren: () => import('./pages/radio/radio.module').then( m => m.RadioPageModule)
  },
  {
    path: 'umadem',
    loadChildren: () => import('./pages/umadem/umadem.module').then( m => m.UmademPageModule)
  },
  {
    path: 'semadmig',
    loadChildren: () => import('./pages/semadmig/semadmig.module').then( m => m.SemadmigPageModule)
  },
  {
    path: 'usademig',
    loadChildren: () => import('./pages/usademig/usademig.module').then( m => m.UsademigPageModule)
  },
  {
    path: 'leitura',
    loadChildren: () => import('./pages/leitura/leitura.module').then( m => m.LeituraPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
