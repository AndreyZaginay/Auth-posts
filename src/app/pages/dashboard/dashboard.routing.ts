import { Routes } from "@angular/router";

import { DashboardComponent } from './dashboard.component';

export const DashboardRouting: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
                {
                    path: 'profile',
                    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
                },
                {
                    path: 'posts',
                    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
                },
                {
                    path: '',
                    pathMatch: 'full',
                    redirectTo: 'posts'
                },
                {
                    path: '**',
                    redirectTo: ''
                }
        ]
    }
]