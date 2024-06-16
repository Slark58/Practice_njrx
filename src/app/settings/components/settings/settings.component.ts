import {Component, OnDestroy, OnInit} from '@angular/core'
import {FormBuilder, FormGroup} from '@angular/forms'
import {Store, select} from '@ngrx/store'
import {ICurrentUser} from '../../../shared/types/currentUser.interface'
import {Observable, Subscription, filter, pipe} from 'rxjs'
import {userSelector} from '../../../auth/store/selectors'
import {IBackendErrors} from '../../../shared/types/backendErrors.interface'
import {
  isSubmitingSelector,
  validationErrorsSelector,
} from '../../store/selectors'
import {updateUserAction} from '../../../auth/store/actions/updateUser.action'
import {IUserInput} from '../../../shared/types/userInput.interface'
import {logoutAction} from '../../../auth/store/actions/sync.action'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, OnDestroy {
  user: ICurrentUser
  userSub: Subscription
  updateform: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<IBackendErrors | null>

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initValues()
    this.initListeners()
    console.log(this.user)
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe()
  }

  initListeners(): void {
    this.userSub = this.store
      .pipe(select(userSelector), filter(Boolean))
      .subscribe((user) => {
        this.user = user
        this.initForm()
        console.log('settingpage user: ', user)
      })
  }

  initValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmitingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  initForm() {
    this.updateform = this.fb.group({
      image: this.user.image,
      username: this.user.username,
      bio: this.user.bio,
      email: this.user.email,
      password: '',
    })
  }

  submit(): void {
    const currentUserInput: IUserInput = {
      ...this.user,
      ...this.updateform.value,
    }

    console.log(currentUserInput)

    this.store.dispatch(updateUserAction({userInput: currentUserInput}))
  }

  logout(): void {
    this.store.dispatch(logoutAction())
  }
}
