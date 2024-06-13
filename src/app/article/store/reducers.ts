import {Action, createReducer, on} from '@ngrx/store'
import {IArticleState} from '../types/articleState.interface'

import {routerNavigationAction} from '@ngrx/router-store'
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from './actions/getFeed.action'

const initialState: IArticleState = {
  isLoading: false,
  error: null,
  data: null,
}

const articleReducer = createReducer(
  initialState,

  ////$ GET FEEDS $////
  on(
    getArticleAction,
    (state): IArticleState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): IArticleState => ({
      ...state,
      isLoading: false,
      data: action.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state): IArticleState => ({
      ...state,
      isLoading: false,
    })
  ),

  ////$ ROUTER NAVIGATION $////

  on(routerNavigationAction, (): IArticleState => initialState)
)

export function reducers(state: IArticleState, action: Action) {
  return articleReducer(state, action)
}
