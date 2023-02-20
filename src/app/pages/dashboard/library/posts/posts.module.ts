import { PostsComponent } from './posts.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { PostsRouting } from './posts.routing';



@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PostsRouting)
  ]
})
export class PostsModule { }
