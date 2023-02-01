import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth.service';
import { StateModule } from './state/state.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StateModule
  ],
  providers: [AuthService],
  exports: [StateModule]
})
export class CoreModule { }
