import {NgModule} from '@angular/core'

import {CommonModule} from '@angular/common'
import {FeedComponent} from './components/feed/feed.component'
import {EffectsModule} from '@ngrx/effects'
import {GetFeedEffect} from './store/effects/getfeed.effect'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {FeedService} from './services/feed.service'
import {RouterModule} from '@angular/router'

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
  ],
  exports: [FeedComponent],
  declarations: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}
