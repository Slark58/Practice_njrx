import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap} from 'rxjs'
import {AuthService} from '../../services/auth.service'
import {ICurrentUser} from '../../../shared/types/currentUser.interface'
import {HttpErrorResponse} from '@angular/common/http'
import {
  updateUserAction,
  updateUserFailureAction,
  updateUserSuccessAction,
} from '../actions/updateUser.action'

@Injectable()
export class UpdateUserEffect {
  constructor(private actions$: Actions, private authService: AuthService) {}

  updateUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUserAction),
      switchMap(({userInput}) => {
        return this.authService.updateUser(userInput).pipe(
          map((currentUser: ICurrentUser) => {
            return updateUserSuccessAction({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              updateUserFailureAction({
                errors: errorResponse.error.errors,
              })
            )
          })
        )
      })
    )
  )
}
