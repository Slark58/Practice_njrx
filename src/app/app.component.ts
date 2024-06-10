import {Component, OnInit, inject} from '@angular/core'
import {Store} from '@ngrx/store'
import {checkAuthAction} from './auth/store/actions/checkAuth.action'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'cloude'
  store = inject(Store)

  ngOnInit(): void {
    this.store.dispatch(checkAuthAction())
  }
}
