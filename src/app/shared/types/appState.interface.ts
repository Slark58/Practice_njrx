import {IArticleState} from '../../article/types/articleState.interface'
import {IAuthState} from '../../auth/types/authState.interface'
import {ICreateArticleState} from '../../create-article/types/createArticleState.interface'
import {IEditArticleState} from '../../edit-article/types/createEditState.interface'
import {ISettingsState} from '../../settings/types/settingsState.interface'
import {IUserProfileState} from '../../userProfile/types/userProfileState.interface'
import {IFeedState} from '../modules/feed/types/feedState.interface'
import {IPopularTagsState} from '../modules/popular-tags/types/popularTagsState.interface'

export interface IAppState {
  auth: IAuthState
  feed: IFeedState
  popularTags: IPopularTagsState
  article: IArticleState
  createArticle: ICreateArticleState
  editArticle: IEditArticleState
  settings: ISettingsState
  userProfile: IUserProfileState
}
