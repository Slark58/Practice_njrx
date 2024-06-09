import {Action, createReducer, on} from '@ngrx/store'
import {IAuthState} from '../types/authState.interface'
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.action'

const initialState: IAuthState = {
  isSubmiting: false,
  currentUser: null,
  isLoggedIn: null,
  validationErrors: null,
}

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): IAuthState => ({
      ...state,
      isSubmiting: true,
      validationErrors: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmiting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmiting: false,
      validationErrors: action.errors,
    })
  )
)

export function reducer(state: IAuthState, action: Action) {
  return authReducer(state, action)
}
