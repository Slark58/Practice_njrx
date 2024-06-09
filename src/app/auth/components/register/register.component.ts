import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {Store, select} from '@ngrx/store'
import {registerAction} from '../../store/actions/register.action'
import {Observable} from 'rxjs'
import {isSubmitingSelector, validationErrors} from '../../store/selectors'
import {IAppState} from '../../../shared/types/appState.interface'
import {AuthService} from '../../services/auth.service'
import {ICurrentUser} from '../../../shared/types/currentUser.interface'
import {IRegisterRequest} from '../../types/registerRequest.interface'
import {IBackendErrors} from '../../../shared/types/backendErrors.interface'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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
    this.backErrors$ = this.store.pipe(select(validationErrors))
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
    console.log(this.form.valid)
  }

  onSubmit(): void {
    console.log(this.form.value)
    const request: IRegisterRequest = {
      user: this.form.value,
    }
    this.store.dispatch(registerAction({request}))
  }
}
