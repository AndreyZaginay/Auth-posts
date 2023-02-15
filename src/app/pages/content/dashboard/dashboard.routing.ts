import { AddPostComponent } from './profile/add-post/add-post.component';
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
                    path: 'add-post',
                    component: AddPostComponent
                },
                {
                    path: '**',
                    redirectTo: 'profile'
                },
                {
                    path: '',
                    pathMatch: 'full',
                    redirectTo: 'profile'
                }
        ]
    }
]