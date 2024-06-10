import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'

import {catchError, map, of, switchMap} from 'rxjs'
import {AuthService} from '../../services/auth.service'
import {ICurrentUser} from '../../../shared/types/currentUser.interface'
import {PersistenceService} from '../../../shared/services/persistence.service'

import {
  checkAuthAction,
  checkAuthFailureAction,
  checkAuthSuccessAction,
} from '../actions/checkAuth.action'

@Injectable()
export class CheckAuthEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService
  ) {}

  checkAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(checkAuthAction),
      switchMap(() => {
        const token = this.persistenceService.get('accessToken')
        if (!token) {
          return of(checkAuthFailureAction())
        }
        return this.authService.checkAuth().pipe(
          map((currentUser: ICurrentUser) => {
            return checkAuthSuccessAction({currentUser})
          }),
          catchError(() => {
            return of(checkAuthFailureAction())
          })
        )
      })
    )
  )
}
