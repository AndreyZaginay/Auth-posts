import { AuthGuard } from "@shomas/shared"

import { DashboardComponent } from './dashboard.component';
import { Routes } from "@angular/router";

export const DashboardRouting: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
                {
                    path: 'library',
                    loadChildren: () => import('./library/library.module').then(m => m.LibraryModule)
                },
                {
                    path: 'profile',
                    canActivate: [AuthGuard],
                    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
                },
                {
                    path: '',
                    pathMatch: 'full',
                    redirectTo: 'library'
                },
                {
                    path: '**',
                    redirectTo: ''
                }
        ]
    }
]