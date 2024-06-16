import {NgModule} from '@angular/core'
import {SettingsComponent} from './components/settings/settings.component'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {StoreModule} from '@ngrx/store'
import {reducers} from './store/reducers'
import {BackendErrorMessagesModule} from '../shared/modules/backend-error-messages/backend-error-messages.module'
import {ReactiveFormsModule} from '@angular/forms'

const routes = [
  {
    path: 'settings',
    component: SettingsComponent,
  },
]

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    BackendErrorMessagesModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('settings', reducers),
  ],
  exports: [SettingsComponent],
  declarations: [SettingsComponent],
  providers: [],
})
export class SettingsModule {}
