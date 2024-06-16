import {ICurrentUser} from './currentUser.interface'

export interface IUserInput extends ICurrentUser {
  password: string
}
