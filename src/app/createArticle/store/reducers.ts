import {Action, createReducer, on} from '@ngrx/store'
import {ICreateArticleState} from '../types/createArticleState.interface'
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from './actions/createArticle.action'

const initState: ICreateArticleState = {
  isSubmitting: false,
  validationErrors: null,
}

const creteArticleReducer = createReducer(
  initState,
  on(
    createArticleAction,
    (state): ICreateArticleState => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    createArticleSuccessAction,
    (state): ICreateArticleState => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    createArticleFailureAction,
    (state, action): ICreateArticleState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
)

export function reducers(state: ICreateArticleState, action: Action) {
  return creteArticleReducer(state, action)
}
