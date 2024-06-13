import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'
import {Store, select} from '@ngrx/store'
import {Observable, Subscription, combineLatest, map} from 'rxjs'
import {environment} from '../../../../environments/environment.development'
import {getArticleAction} from '../../store/actions/getArticle.action'
import {IArticle} from '../../../shared/types/acricle.interface'
import {
  articleSelector,
  errorSelector,
  isLoadingSelector,
} from '../../store/selectors'
import {userSelector} from '../../../auth/store/selectors'
import {ICurrentUser} from '../../../shared/types/currentUser.interface'
import {deleteArticleAction} from '../../store/actions/deleteArticle.action'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  store = inject(Store)
  activeRoute = inject(ActivatedRoute)

  article: IArticle | null
  slug: string

  articleSub$: Subscription
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  isAuthor$: Observable<boolean>

  ngOnInit(): void {
    this.initValues()
    this.fetchData()
    this.initListeners()
  }

  ngOnDestroy(): void {
    this.articleSub$.unsubscribe()
  }

  fetchData() {
    this.store.dispatch(getArticleAction({slug: this.slug}))
  }

  deleteArticle(): void {
    this.store.dispatch(deleteArticleAction({slug: this.slug}))
  }

  initValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.slug = this.activeRoute.snapshot.paramMap.get('slug')

    this.isAuthor$ = combineLatest([
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(userSelector)),
    ]).pipe(
      map(([article, user]: [IArticle | null, ICurrentUser | null]) => {
        if (!article || !user) {
          return false
        }

        return user.username === article.author.username
      })
    )
  }

  initListeners(): void {
    this.articleSub$ = this.store
      .pipe(select(articleSelector))
      .subscribe((article: IArticle | null) => {
        this.article = article
      })
  }
}
