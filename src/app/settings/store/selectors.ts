import {createFeatureSelector, createSelector} from '@ngrx/store'
import {ISettingsState} from '../types/settingsState.interface'

export const settingsFeatureSelector =
  createFeatureSelector<ISettingsState>('settings')

export const isSubmitingSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: ISettingsState) => settingsState.isSubmiting
)
export const validationErrorsSelector = createSelector(
  settingsFeatureSelector,
  (settingsState: ISettingsState) => settingsState.validationErrors
)
