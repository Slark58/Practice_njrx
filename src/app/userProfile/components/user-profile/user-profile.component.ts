import {Component, OnDestroy, OnInit} from '@angular/core'
import {IProfile} from '../../../shared/types/profile.interface'
import {Observable, Subscription, combineLatest, filter, map} from 'rxjs'
import {Store, select} from '@ngrx/store'
import {getUserProfileAction} from '../../store/actions/getUserProfile.action'
import {ActivatedRoute, Params, Router} from '@angular/router'
import {
  errorSelector,
  isLoadingSelector,
  userProfileSelector,
} from '../../store/selectors'
import {userSelector} from '../../../auth/store/selectors'
import {ICurrentUser} from '../../../shared/types/currentUser.interface'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  userProfile: IProfile
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  userProfileSub$: Subscription
  slug: string
  apiUrl: string
  isCurrentUserProfile$: Observable<boolean>

  ngOnInit() {
    this.initListeners()
    this.initValues()
  }

  ngOnDestroy(): void {
    this.userProfileSub$.unsubscribe()
  }

  initValues() {
    this.slug = this.activatedRoute.snapshot.paramMap.get('slug')
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.isCurrentUserProfile$ = combineLatest([
      this.store.pipe(select(userSelector), filter(Boolean)),
      this.store.pipe(select(userProfileSelector), filter(Boolean)),
    ]).pipe(
      map(([currentUser, userProfile]: [ICurrentUser, IProfile]) => {
        return currentUser.username === userProfile.username
      })
    )
  }

  initListeners() {
    this.userProfileSub$ = this.store
      .pipe(select(userProfileSelector))
      .subscribe((userProfile: IProfile) => {
        this.userProfile = userProfile
      })

    this.activatedRoute.params.subscribe((params: Params) => {
      console.log('params', params)
      this.slug = params['slug']
      this.fetchUserProfile()
    })
  }

  fetchUserProfile() {
    this.store.dispatch(getUserProfileAction({slug: this.slug}))
  }

  getApiUrl(): string {
    const isFavorites = this.router.url.includes('favorites')
    return (this.apiUrl = isFavorites
      ? `/articles?favorited=${this.slug}`
      : `/articles?author=${this.slug}`)
  }
}
