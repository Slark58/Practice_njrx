import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {EditArticleComponent} from './components/edit-article/edit-article.component'
import {RouterModule, Routes} from '@angular/router'
import {ArticleFormModule} from '../shared/modules/article-form/article-form.module'
import {EditArticleService} from './services/editArticle.service'
import {EffectsModule} from '@ngrx/effects'
import {UpdateArticleEffect} from './store/effects/updateArticle.effect'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {ArticleService as SharedArticleService} from '../shared/services/article.service'
import {GetArticleEffect} from '../article/store/effects/getArticle.effect'
import {LoadingModule} from '../shared/modules/loading/loading.module'

const routes: Routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent,
  },
]

@NgModule({
  imports: [
    LoadingModule,
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetArticleEffect, UpdateArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
    ArticleFormModule,
  ],
  exports: [EditArticleComponent],
  declarations: [EditArticleComponent],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
