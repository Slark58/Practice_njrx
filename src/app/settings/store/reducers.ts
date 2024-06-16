import {Action, createReducer, on} from '@ngrx/store'
import {ISettingsState} from '../types/settingsState.interface'
import {
  updateUserAction,
  updateUserFailureAction,
  updateUserSuccessAction,
} from '../../auth/store/actions/updateUser.action'

const initState: ISettingsState = {
  isSubmiting: false,
  validationErrors: null,
}

const settingsReducer = createReducer(
  initState,
  on(
    updateUserAction,
    (state): ISettingsState => ({
      ...state,
      isSubmiting: true,
    })
  ),
  on(
    updateUserSuccessAction,
    (state): ISettingsState => ({
      ...state,
      isSubmiting: false,
    })
  ),
  on(
    updateUserFailureAction,
    (state, action): ISettingsState => ({
      ...state,
      isSubmiting: false,
      validationErrors: action.errors,
    })
  )
)

export function reducers(state: ISettingsState, action: Action) {
  return settingsReducer(state, action)
}
