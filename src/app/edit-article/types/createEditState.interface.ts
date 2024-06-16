import {IArticle} from '../../shared/types/acricle.interface'
import {IBackendErrors} from '../../shared/types/backendErrors.interface'

export interface IEditArticleState {
  article: IArticle | null
  isLoading: boolean
  isSubmitting: boolean
  validationErrors: IBackendErrors | null
}
