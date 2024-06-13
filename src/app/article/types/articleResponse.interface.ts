import {IArticle} from '../../shared/types/acricle.interface'

export interface IArticleResponse {
  articles: IArticle[]
  articlesCount: number
}
