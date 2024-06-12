import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionTypes'
import {TPopularTag} from '../../../../types/popularTag.type'

export const getPopularTagsAction = createAction(ActionTypes.GET_POPULAR_TAGS)

export const getPopularTagsSuccessAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_SUCCESS,
  props<{popularTags: TPopularTag[]}>()
)

export const getPopularTagsFailureAction = createAction(
  ActionTypes.GET_POPULAR_TAGS_FAILURE
)
