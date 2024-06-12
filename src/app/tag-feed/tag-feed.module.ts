import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {TagFeedComponent} from './components/tag-feed/tag-feed.component'
import {PopularTagsModule} from '../shared/modules/popular-tags/popular-tags.module'
import {FeedTogglerModule} from '../shared/modules/feed-toggler/feed-toggler.module'
import {BannerModule} from '../shared/modules/banner/banner.module'
import {FeedModule} from '../shared/modules/feed/feed.module'
import {RouterModule, Routes} from '@angular/router'

const routes: Routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
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
  declarations: [TagFeedComponent],
})
export class TagFeedModule {}
