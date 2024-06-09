import {createAction, props} from '@ngrx/store'
import {ActionsTypes} from '../actionsTypes'
import {IRegisterRequest} from '../../types/registerRequest.interface'
import {ICurrentUser} from '../../../shared/types/currentUser.interface'
import {IBackendErrors} from '../../../shared/types/backendErrors.interface'

export const registerAction = createAction(
  ActionsTypes.REGISTER,
  props<{request: IRegisterRequest}>()
)

export const registerSuccessAction = createAction(
  ActionsTypes.REGISTER_SUCCESS,
  props<{currentUser: ICurrentUser}>()
)

export const registerFailureAction = createAction(
  ActionsTypes.REGISTER_FAILURE,
  props<{errors: IBackendErrors}>()
)
