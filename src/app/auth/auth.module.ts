import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RegisterComponent} from './components/register/register.component'
import {RouterModule, Routes} from '@angular/router'
import {ReactiveFormsModule} from '@angular/forms'
import {StoreModule} from '@ngrx/store'
import {reducer} from './store/reducers'
import {AuthService} from './services/auth.service'
import {HttpClientModule} from '@angular/common/http'
import {EffectsModule} from '@ngrx/effects'
import {RegisterEffect} from './store/effects/register.effect'
import {BackendErrorMessagesModule} from '../shared/modules/backend-error-messages/backend-error-messages.module'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
]

@NgModule({
  imports: [
    BackendErrorMessagesModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([RegisterEffect]),
  ],
  exports: [RegisterComponent],
  declarations: [RegisterComponent],
  providers: [AuthService],
})
export class AuthModule {}
