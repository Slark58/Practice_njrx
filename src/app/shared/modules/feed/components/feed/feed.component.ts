import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core'
import {Store, select} from '@ngrx/store'
import {getFeedAction} from '../../store/actions/getFeed.action'
import {Observable} from 'rxjs'
import {IFeedResponse} from '../../types/feedResponse.interface'
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from '../../store/selectors'
import {environment} from '../../../../../../environments/environment.development'
import {ActivatedRoute, Params, Router} from '@angular/router'
import queryString from 'query-string'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnChanges {
  @Input('apiUrl') apiUrlProps: string
  store = inject(Store)
  router = inject(Router)
  activeRoute = inject(ActivatedRoute)

  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  feeds$: Observable<IFeedResponse | null>
  baseUrl: string
  limit = environment.limit
  currentPage: number

  ngOnInit(): void {
    this.initValues()
    this.initListeners()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    const isApiUrlChanged =
      !changes['apiUrlProps'].firstChange &&
      changes['apiUrlProps'].currentValue !==
        changes['apiUrlProps'].previousValue

    console.log('isApiUrlChanged: ', isApiUrlChanged)

    if (isApiUrlChanged) {
      this.fetchFeed()
    }
  }

  initValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.feeds$ = this.store.pipe(select(feedSelector))
    this.baseUrl = this.router.url.split('?')[0]
  }

  initListeners(): void {
    this.activeRoute.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params['page'] || '1')
      this.fetchFeed()
    })
  }
  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit
    const parsedURl = queryString.parseUrl(this.apiUrlProps)
    const stringifiedParams = queryString.stringify({
      limit: this.limit,
      offset,
      ...parsedURl.query,
    })

    const apiUrlWithParams = `${parsedURl.url}?${stringifiedParams}`
    this.store.dispatch(getFeedAction({url: apiUrlWithParams}))
  }
}
