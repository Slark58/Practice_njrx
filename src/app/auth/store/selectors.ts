import {createFeatureSelector, createSelector} from '@ngrx/store'
import {IAppState} from '../../shared/types/appState.interface'
import {IAuthState} from '../types/authState.interface'

export const authFeatureSelector = (state: IAppState): IAuthState => state.auth

export const isSubmitingSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.isSubmiting
)
export const validationErrors = createSelector(
  authFeatureSelector,
  (authState: IAuthState) => authState.validationErrors
)
