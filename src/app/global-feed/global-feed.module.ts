import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {GlobalFeedComponent} from './components/global-feed/global-feed.component'
import {FeedModule} from '../shared/modules/feed/feed.module'
import {BannerModule} from '../shared/modules/banner/banner.module'
import {ErrorMessageModule} from '../shared/modules/error-message/error-message.module'
import {PopularTagsModule} from '../shared/modules/popular-tags/popular-tags.module'
import {FeedTogglerModule} from '../shared/modules/feed-toggler/feed-toggler.module'

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
]

@NgModule({
  imports: [
    PopularTagsModule,
    FeedTogglerModule,
    BannerModule,
    FeedModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [],
  declarations: [GlobalFeedComponent],
  providers: [],
})
export class GlobalFeedModule {}
