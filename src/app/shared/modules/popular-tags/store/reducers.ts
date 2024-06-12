import {Action, createReducer, on} from '@ngrx/store'
import {IPopularTagsState} from '../types/popularTagsState.interface'
import {
  getPopularTagsAction,
  getPopularTagsFailureAction,
  getPopularTagsSuccessAction,
} from './actions/getPopularTags.actions'

const initState: IPopularTagsState = {
  data: null,
  error: null,
  isLoading: false,
}

const popularTagsReducer = createReducer(
  initState,

  ////$ GET TAGS $////
  on(
    getPopularTagsAction,
    (state): IPopularTagsState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getPopularTagsSuccessAction,
    (state, action): IPopularTagsState => ({
      ...state,
      isLoading: false,
      data: action.popularTags,
    })
  ),
  on(
    getPopularTagsFailureAction,
    (state): IPopularTagsState => ({
      ...state,
      isLoading: false,
    })
  )
)

export function reducers(state: IPopularTagsState, action: Action) {
  return popularTagsReducer(state, action)
}
