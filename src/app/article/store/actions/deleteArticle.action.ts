import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionTypes'
import {IArticle} from '../../../shared/types/acricle.interface'

export const deleteArticleAction = createAction(
  ActionTypes.DELETE_ARTICLE,
  props<{slug: string}>()
)
export const deleteArticleSuccessAction = createAction(
  ActionTypes.DELETE_ARTICLE_SUCCESS
)
export const deleteArticleFailureAction = createAction(
  ActionTypes.DELETE_ARTICLE_FAILURE
)
