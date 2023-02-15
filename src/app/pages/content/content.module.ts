import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRouting } from './content.routing';
import { ContentComponent } from './content.component';


@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ContentRouting)
  ]
})
export class ContentModule { }
