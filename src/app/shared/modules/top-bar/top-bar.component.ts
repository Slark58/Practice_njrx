import {Component, OnInit, inject} from '@angular/core'
import {Store, select} from '@ngrx/store'
import {Observable} from 'rxjs'
import {
  isLoggedInSelector,
  noAuthSelector,
  userSelector,
} from '../../../auth/store/selectors'
import { ICurrentUser } from '../../types/currentUser.interface'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>
  noAuth$: Observable<boolean>
  user$: Observable<ICurrentUser | null>

  store = inject(Store)

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    this.noAuth$ = this.store.pipe(select(noAuthSelector))
    this.user$ = this.store.pipe(select(userSelector))
  }
}
