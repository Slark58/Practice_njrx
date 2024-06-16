import {createAction} from '@ngrx/store'
import {ActionTypes} from '../actionsTypes'

export const logoutAction = createAction(ActionTypes.LOGOUT)
