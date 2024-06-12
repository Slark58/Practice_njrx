import {TPopularTag} from '../../../types/popularTag.type'

export interface IPopularTagsState {
  isLoading: boolean
  error: string | null
  data: TPopularTag[] | null
}
