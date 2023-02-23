import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { postsReducers , PostsEffects} from '@shomas/posts/state';
import { AuthEffects } from './effects';
import { authReducer } from './reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({auth: authReducer, posts: postsReducers}),
    EffectsModule.forRoot([AuthEffects, PostsEffects ]),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ]
})
export class StateModule { }
