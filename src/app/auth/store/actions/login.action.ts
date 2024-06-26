import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionsTypes'
import {ILoginRequest} from '../../types/loginRequest.interface'
import {IBackendErrors} from '../../../shared/types/backendErrors.interface'
import {ICurrentUser} from '../../../shared/types/currentUser.interface'

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{request: ILoginRequest}>()
)
export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{currentUser: ICurrentUser}>()
)
export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{errors: IBackendErrors}>()
)
