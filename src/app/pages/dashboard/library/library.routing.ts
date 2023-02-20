import { LibraryComponent } from './library.component';

import { Routes } from "@angular/router";

export const LibraryRouting: Routes = [
    {
        path: '',
        component: LibraryComponent,
        children: [
                {
                    path: 'posts',
                    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
                },
                {
                    path: '**',
                    redirectTo: ''
                }
        ]
    }
]