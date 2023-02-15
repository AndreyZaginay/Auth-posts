import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardRouting } from './dashboard.routing';
import { AddPostComponent } from './add-post/add-post.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRouting),
  ]
})
export class DashboardModule { }
