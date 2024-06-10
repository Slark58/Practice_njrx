import {createAction, props} from '@ngrx/store'
import {ActionsTypes} from '../actionsTypes'
import {ILoginRequest} from '../../types/loginRequest.interface'
import {IBackendErrors} from '../../../shared/types/backendErrors.interface'
import {ICurrentUser} from '../../../shared/types/currentUser.interface'

export const loginAction = createAction(
  ActionsTypes.LOGIN,
  props<{request: ILoginRequest}>()
)
export const loginSuccessAction = createAction(
  ActionsTypes.LOGIN_SUCCESS,
  props<{currentUser: ICurrentUser}>()
)
export const loginFailureAction = createAction(
  ActionsTypes.LOGIN_FAILURE,
  props<{errors: IBackendErrors}>()
)
