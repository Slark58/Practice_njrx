import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {YourFeedComponent} from './components/your-feed/your-feed.component'
import {RouterModule, Routes} from '@angular/router'
import {PopularTagsModule} from '../shared/modules/popular-tags/popular-tags.module'
import {FeedTogglerModule} from '../shared/modules/feed-toggler/feed-toggler.module'
import {BannerModule} from '../shared/modules/banner/banner.module'
import {FeedModule} from '../shared/modules/feed/feed.module'
const routes: Routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
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
  declarations: [YourFeedComponent],
})
export class YourFeedModule {}
