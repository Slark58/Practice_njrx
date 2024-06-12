import {Component, OnInit, inject} from '@angular/core'
import {Store, select} from '@ngrx/store'
import {getPopularTagsAction} from '../../store/actions/getPopularTags.actions'
import {Observable} from 'rxjs'
import {TPopularTag} from '../../../../types/popularTag.type'
import {
  errorSelector,
  isLoadingSelector,
  popularTagsSelector,
} from '../../store/selectors'

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  store = inject(Store)

  popularTags$: Observable<TPopularTag[] | null>
  isLoading$: Observable<boolean>
  error$: Observable<string | null>

  ngOnInit() {
    this.fetchData()
    this.initValues()
  }

  initValues(): void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  fetchData(): void {
    this.store.dispatch(getPopularTagsAction())
  }
}
