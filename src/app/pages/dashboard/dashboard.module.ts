import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryComponent } from './library/library.component';
import { DashboardRouting } from './dashboard.routing';



@NgModule({
  declarations: [
    LibraryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRouting)
  ]
})
export class DashboardModule { }
