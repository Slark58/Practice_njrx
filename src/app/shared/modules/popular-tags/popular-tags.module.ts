import {NgModule} from '@angular/core'

import {PopularTagsComponent} from './components/popular-tags/popular-tags.component'
import {CommonModule} from '@angular/common'
import {PopularTagsService} from './services/popularTags.service'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {EffectsModule} from '@ngrx/effects'
import {GetPopularTagsEffect} from './store/effects/getPopularTags.effect'
import {RouterLink, RouterModule} from '@angular/router'
import {LoadingModule} from '../loading/loading.module'
import {ErrorMessageModule} from '../error-message/error-message.module'

@NgModule({
  imports: [
    LoadingModule,
    ErrorMessageModule,
    RouterModule,
    CommonModule,
    EffectsModule.forFeature([GetPopularTagsEffect]),
    StoreModule.forFeature('popularTags', reducers),
  ],
  exports: [PopularTagsComponent],
  declarations: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
