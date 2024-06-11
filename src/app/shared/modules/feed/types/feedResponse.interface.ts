import {IArticle} from '../../../types/acricle.interface'

export interface IFeedResponse {
  articles: IArticle[]
  articlesCount: number
}
