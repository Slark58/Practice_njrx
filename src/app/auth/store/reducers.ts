import {Action, createReducer, on} from '@ngrx/store'
import {IAuthState} from '../types/authState.interface'
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.action'
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from './actions/login.action'
import {
  checkAuthAction,
  checkAuthFailureAction,
  checkAuthSuccessAction,
} from './actions/checkAuth.action'
import {updateUserSuccessAction} from './actions/updateUser.action'
import {logoutAction} from './actions/sync.action'

const initialState: IAuthState = {
  isSubmiting: false,
  currentUser: null,
  isLoading: false,
  isLoggedIn: null,
  validationErrors: null,
}

const authReducer = createReducer(
  initialState,

  //////$ REGISTER $////////
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
  ),

  //////$ LOGIN $////////
  on(
    loginAction,
    (state): IAuthState => ({
      ...state,
      isSubmiting: true,
      validationErrors: null,
    })
  ),
  on(
    loginSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmiting: false,
      currentUser: action.currentUser,
      isLoggedIn: true,
    })
  ),
  on(
    loginFailureAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmiting: false,
      validationErrors: action.errors,
    })
  ),

  //////$ CHECK AUTH $////////
  on(
    checkAuthAction,
    (state): IAuthState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    checkAuthSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isLoading: true,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    checkAuthFailureAction,
    (state): IAuthState => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      currentUser: null,
    })
  ),

  //$ UPDATE USER $//

  on(
    updateUserSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      currentUser: action.currentUser,
    })
  ),
  on(
    logoutAction,
    (state): IAuthState => ({
      ...state,
      isLoggedIn: false,
    })
  )
)

export function reducer(state: IAuthState, action: Action) {
  return authReducer(state, action)
}
