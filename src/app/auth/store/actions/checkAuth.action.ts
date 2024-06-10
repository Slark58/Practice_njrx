import {createAction, props} from '@ngrx/store'
import {ActionsTypes} from '../actionsTypes'
import {ICurrentUser} from '../../../shared/types/currentUser.interface'
import {IBackendErrors} from '../../../shared/types/backendErrors.interface'

export const checkAuthAction = createAction(ActionsTypes.CHECK_AUTH)
export const checkAuthSuccessAction = createAction(
  ActionsTypes.CHECK_AUTH_SUCCESS,
  props<{currentUser: ICurrentUser}>()
)
export const checkAuthFailureAction = createAction(
  ActionsTypes.CHECK_AUTH_FAILURE
)
