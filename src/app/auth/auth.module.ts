import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {RegisterComponent} from './components/register/register.component'
import {RouterModule, Routes} from '@angular/router'

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RegisterComponent],
  declarations: [RegisterComponent],
  providers: [],
})
export class AuthModule {}
