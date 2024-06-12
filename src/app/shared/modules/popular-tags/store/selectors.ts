import {createFeatureSelector, createSelector} from '@ngrx/store'
import {IAppState} from '../../../types/appState.interface'
import {IPopularTagsState} from '../types/popularTagsState.interface'

export const popularTagsFeatureSelector =
  createFeatureSelector<IPopularTagsState>('popularTags')

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: IPopularTagsState) => popularTagsState.data
)
export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: IPopularTagsState) => popularTagsState.isLoading
)
export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: IPopularTagsState) => popularTagsState.error
)
