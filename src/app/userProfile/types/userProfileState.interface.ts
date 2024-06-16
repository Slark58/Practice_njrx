import {IProfile} from '../../shared/types/profile.interface'

export interface IUserProfileState {
  data: IProfile | null
  isLoading: boolean | null
  error: string | null
}
