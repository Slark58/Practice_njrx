import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap} from 'rxjs'
import {ArticleService as SharedArticleService} from '../../../shared/services/article.service'
import {IArticle} from '../../../shared/types/acricle.interface'
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '../actions/getArticle.action'

@Injectable()
export class GetArticleEffect {
  constructor(
    private actions$: Actions,
    private articleService: SharedArticleService
  ) {}

  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap(({slug}) => {
        return this.articleService.getArticle(slug).pipe(
          map((article: IArticle) => {
            return getArticleSuccessAction({article})
          }),
          catchError(() => {
            return of(getArticleFailureAction())
          })
        )
      })
    )
  )
}
