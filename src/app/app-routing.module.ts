import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'content',
  },
  {
    path: 'content',
    loadChildren: () => import('./pages/content/content.module').then(m => m.ContentModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.routing').then(p => p.AuthRouting),
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
