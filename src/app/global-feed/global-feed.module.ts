import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {GlobalFeedComponent} from './components/global-feed/global-feed.component'
import {FeedModule} from '../shared/modules/feed/feed.module'

const routes: Routes = [
  {
    path: '',
    component: GlobalFeedComponent,
  },
]

@NgModule({
  imports: [FeedModule, CommonModule, RouterModule.forChild(routes)],
  exports: [],
  declarations: [GlobalFeedComponent],
  providers: [],
})
export class GlobalFeedModule {}
