import { Routes } from "@angular/router";

import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts.component';

export const PostsRouting: Routes = [
    {
        path: '',
        component: PostsComponent,
    },
    {
        path: 'post/:id',
        component: PostComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
  
]