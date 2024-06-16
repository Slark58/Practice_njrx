import {Action, createReducer, on} from '@ngrx/store'
import {IUserProfileState} from '../types/userProfileState.interface'
import {
  getUserProfileAction,
  getUserProfileSuccessAction,
} from './actions/getUserProfile.action'

const initState: IUserProfileState = {
  data: null,
  error: null,
  isLoading: false,
}

const userProfileReeducer = createReducer(
  initState,
  on(
    getUserProfileAction,
    (state): IUserProfileState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getUserProfileSuccessAction,
    (state, action): IUserProfileState => ({
      ...state,
      isLoading: false,
      data: action.userProfile,
    })
  ),
  on(
    getUserProfileAction,
    (state): IUserProfileState => ({
      ...state,
      isLoading: false,
    })
  )
)

export function reducers(state: IUserProfileState, action: Action) {
  return userProfileReeducer(state, action)
}
