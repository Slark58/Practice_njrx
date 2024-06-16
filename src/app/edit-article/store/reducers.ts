import {Action, createReducer, on} from '@ngrx/store'
import {IEditArticleState} from '../types/createEditState.interface'
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction,
} from './actions/updateArticle.action'
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from './actions/getArticle.action'

const initState: IEditArticleState = {
  article: null,
  isLoading: false,
  isSubmitting: false,
  validationErrors: null,
}

const editArticleReducer = createReducer(
  initState,

  //$ UPDATE ARTICLE $//
  on(
    updateArticleAction,
    (state): IEditArticleState => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    updateArticleSuccessAction,
    (state): IEditArticleState => ({
      ...state,
      isSubmitting: false,
    })
  ),
  on(
    updateArticleFailureAction,
    (state, action): IEditArticleState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),

  //$ GET ARTICLE $//

  on(
    getArticleAction,
    (state): IEditArticleState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): IEditArticleState => ({
      ...state,
      isLoading: false,
      article: action.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state): IEditArticleState => ({
      ...state,
      isLoading: false,
    })
  )
)

export function reducers(state: IEditArticleState, action: Action) {
  return editArticleReducer(state, action)
}
