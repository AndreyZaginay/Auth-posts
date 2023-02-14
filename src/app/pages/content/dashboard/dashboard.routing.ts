import { Routes } from "@angular/router";

import { AuthGuard } from "src/app/shared/guards/auth.guard";
import { DashboardComponent } from './dashboard.component';

export const DashboardRouting: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
                {
                    path: 'profile',
                    canActivate: [ AuthGuard ],
                    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
                },
                {
                    path: '**',
                    redirectTo: ''
                }
        ]
    }
]