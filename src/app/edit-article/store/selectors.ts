import {createFeatureSelector, createSelector} from '@ngrx/store'
import {IEditArticleState} from '../types/createEditState.interface'

export const editArticleFeatureSelector =
  createFeatureSelector<IEditArticleState>('editArticle')

export const isSubmitingSelector = createSelector(
  editArticleFeatureSelector,
  (createArticleState: IEditArticleState) => createArticleState.isSubmitting
)
export const validationErrorsSelector = createSelector(
  editArticleFeatureSelector,
  (createArticleState: IEditArticleState) => createArticleState.validationErrors
)
export const isLoadingSelector = createSelector(
  editArticleFeatureSelector,
  (createArticleState: IEditArticleState) => createArticleState.isLoading
)
export const articleSelector = createSelector(
  editArticleFeatureSelector,
  (createArticleState: IEditArticleState) => createArticleState.article
)
