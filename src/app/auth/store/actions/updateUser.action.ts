import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionsTypes'
import {ILoginRequest} from '../../types/loginRequest.interface'
import {IBackendErrors} from '../../../shared/types/backendErrors.interface'
import {ICurrentUser} from '../../../shared/types/currentUser.interface'
import {IUserInput} from '../../../shared/types/userInput.interface'

export const updateUserAction = createAction(
  ActionTypes.UPDATE_USER,
  props<{userInput: IUserInput}>()
)
export const updateUserSuccessAction = createAction(
  ActionTypes.UPDATE_USER_SUCCESS,
  props<{currentUser: ICurrentUser}>()
)
export const updateUserFailureAction = createAction(
  ActionTypes.UPDATE_USER_FAILURE,
  props<{errors: IBackendErrors}>()
)
