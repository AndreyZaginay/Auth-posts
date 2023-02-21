import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LibraryComponent } from './library/library.component';
import { DashboardRouting } from './dashboard.routing';


@NgModule({
  declarations: [
    DashboardComponent,
    LibraryComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule.forChild(DashboardRouting)
  ]
})
export class DashboardModule { }
