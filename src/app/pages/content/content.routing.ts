import { AuthGuard } from './../../shared/guards/auth.guard';
import { ContentComponent } from './content.component';
import { Routes } from "@angular/router";



export const ContentRouting: Routes = [
    {
        path: '',
        component: ContentComponent,
        children: [
                {
                    path: 'dashboard',
                    canActivate: [AuthGuard],
                    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
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