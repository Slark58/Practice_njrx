import {NgModule} from '@angular/core'

import {CommonModule} from '@angular/common'
import {EffectsModule} from '@ngrx/effects'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {RouterModule} from '@angular/router'
import {BackendErrorMessagesModule} from '../shared/modules/backend-error-messages/backend-error-messages.module'
import {TagListModule} from '../shared/modules/tag-list/tag-list.module'
import {LoadingModule} from '../shared/modules/loading/loading.module'
import {PaginationModule} from '../shared/modules/pagination/pagination.module'
import {GetArticleEffect} from './store/effects/getArticle.effect'
import {ArticleComponent} from './components/article/article.component'
import {ArticleService as SharedArticleService} from '../shared/services/article.service'
import {UtilsService} from '../shared/services/utils.service'
import {ErrorMessageModule} from '../shared/modules/error-message/error-message.module'

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent,
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ErrorMessageModule,
    TagListModule,
    LoadingModule,
    CommonModule,
    EffectsModule.forFeature([GetArticleEffect]),
    StoreModule.forFeature('article', reducers),
  ],
  exports: [ArticleComponent],
  declarations: [ArticleComponent],
  providers: [SharedArticleService, UtilsService],
})
export class ArticleModule {}
