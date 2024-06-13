import {createFeatureSelector, createSelector} from '@ngrx/store'
import {IAuthState} from '../types/authState.interface'

export const authFeatureSelector = createFeatureSelector<IAuthState>('auth')

export const isSubmitingSelector = createSelector(
  authFeatureSelector,
  (authState) => authState.isSubmiting
)
export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.validationErrors
)
export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isLoggedIn
)
export const noAuthSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isLoggedIn === false
)
export const userSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.currentUser
)
