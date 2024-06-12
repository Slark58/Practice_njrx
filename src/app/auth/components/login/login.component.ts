import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Store, select} from '@ngrx/store'
import {registerAction} from '../../store/actions/register.action'
import {Observable} from 'rxjs'
import {
  isSubmitingSelector,
  validationErrorsSelector,
} from '../../store/selectors'
import {IAppState} from '../../../shared/types/appState.interface'
import {AuthService} from '../../services/auth.service'
import {ICurrentUser} from '../../../shared/types/currentUser.interface'
import {IRegisterRequest} from '../../types/registerRequest.interface'
import {IBackendErrors} from '../../../shared/types/backendErrors.interface'
import {loginAction} from '../../store/actions/login.action'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup
  isSubmiting$: Observable<boolean>
  backErrors$: Observable<IBackendErrors | null>

  constructor(private fb: FormBuilder, private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeValues(): void {
    this.isSubmiting$ = this.store.pipe(select(isSubmitingSelector))
    this.backErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: [''],
      password: [''],
    })
    console.log(this.form.valid)
  }

  onSubmit(): void {
    console.log(this.form.value)
    const request: IRegisterRequest = {
      user: this.form.value,
    }
    this.store.dispatch(loginAction({request}))
  }
}
