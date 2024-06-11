import {Action, createReducer, on} from '@ngrx/store'
import {IFeedState} from '../types/feedState.interface'
import {
  getFeedAction,
  getFeedFailureAction,
  getFeedSuccessAction,
} from './actions/getFeed.action'
import {routerNavigationAction} from '@ngrx/router-store'

const initialState: IFeedState = {
  isLoading: false,
  error: null,
  data: null,
}

const feedReducer = createReducer(
  initialState,

  ////$ GET FEEDS $////
  on(
    getFeedAction,
    (state): IFeedState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): IFeedState => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(
    getFeedFailureAction,
    (state): IFeedState => ({
      ...state,
      isLoading: false,
    })
  ),

  ////$ ROUTER NAVIGATION $////

  on(routerNavigationAction, (): IFeedState => initialState)
)

export function reducers(state: IFeedState, action: Action) {
  return feedReducer(state, action)
}
