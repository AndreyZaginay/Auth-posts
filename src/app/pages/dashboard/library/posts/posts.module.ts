import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsComponent } from './posts.component';
import { PostsRouting } from './posts.routing';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [PostsComponent, PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PostsRouting)
  ]
})
export class PostsModule { }
