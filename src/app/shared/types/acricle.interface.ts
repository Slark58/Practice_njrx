import {IProfile} from './profile.interface'

export interface IArticle {
  author: IProfile
  body: string
  createdAt: string
  description: string
  favorited: boolean
  favoritedCount: number
  slug: string
  tagList: string[]
  title: string
  updatedAt: string
}
