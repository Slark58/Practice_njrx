import {IArticle} from '../../shared/types/acricle.interface'

export interface IArticleState {
  isLoading: boolean
  error: string | null
  data: IArticle | null
}
