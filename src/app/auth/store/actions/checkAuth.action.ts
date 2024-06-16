import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionsTypes'
import {ICurrentUser} from '../../../shared/types/currentUser.interface'
import {IBackendErrors} from '../../../shared/types/backendErrors.interface'

export const checkAuthAction = createAction(ActionTypes.CHECK_AUTH)
export const checkAuthSuccessAction = createAction(
  ActionTypes.CHECK_AUTH_SUCCESS,
  props<{currentUser: ICurrentUser}>()
)
export const checkAuthFailureAction = createAction(
  ActionTypes.CHECK_AUTH_FAILURE
)
