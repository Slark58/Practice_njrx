import {Component, Input, OnInit, inject} from '@angular/core'
import {Store, select} from '@ngrx/store'
import {Observable} from 'rxjs'
import {isLoggedInSelector} from '../../../../../auth/store/selectors'

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.scss'],
})
export class FeedTogglerComponent implements OnInit {
  store = inject(Store)

  @Input('tagName') tagNameProps: string | null

  isLoggedIn$: Observable<boolean>

  ngOnInit() {
    this.initValues()
  }

  initValues() {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
  }
}
