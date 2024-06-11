import {Component, Input, OnInit, inject} from '@angular/core'
import {Store, select} from '@ngrx/store'
import {getFeedAction} from '../../store/actions/getFeed.action'
import {Observable} from 'rxjs'
import {IFeedResponse} from '../../types/feedResponse.interface'
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from '../../store/selectors'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  store = inject(Store)

  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  feeds$: Observable<IFeedResponse | null>

  @Input('apiUrl') apiUrlProps: string

  ngOnInit(): void {
    this.initValues()
    this.fetchData()
  }

  initValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.feeds$ = this.store.pipe(select(feedSelector))
  }
  fetchData(): void {
    this.store.dispatch(getFeedAction({url: this.apiUrlProps}))
  }
}
