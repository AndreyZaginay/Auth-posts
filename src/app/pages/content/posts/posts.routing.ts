import { Routes } from "@angular/router";

import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts.component';




export const PostsRouting: Routes = [
    {
        path: '',
        component: PostsComponent,
        children: [
            {
                path: ':id',
                component: PostComponent
            },
            {
                path: '**',
                redirectTo: ''
            }
        ]
    }
  
]