import {NgModule} from '@angular/core'

import {CommonModule} from '@angular/common'
import {FeedComponent} from './components/feed/feed.component'
import {EffectsModule} from '@ngrx/effects'
import {GetFeedEffect} from './store/effects/getfeed.effect'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {FeedService} from './services/feed.service'
import {RouterModule} from '@angular/router'
import {ErrorMessageModule} from '../error-message/error-message.module'
import {LoadingModule} from '../loading/loading.module'
import {PaginationModule} from '../pagination/pagination.module'
import {TagListModule} from '../tag-list/tag-list.module'
import {UtilsService} from '../../services/utils.service'
import {AddToFavoritesModule} from '../add-to-favorites/add-to-favorites.module'

@NgModule({
  imports: [
    RouterModule,
    ErrorMessageModule,
    TagListModule,
    LoadingModule,
    PaginationModule,
    AddToFavoritesModule,
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
  ],
  exports: [FeedComponent],
  declarations: [FeedComponent],
  providers: [FeedService, UtilsService],
})
export class FeedModule {}
