import {IBackendErrors} from '../../shared/types/backendErrors.interface'

export interface ISettingsState {
  isSubmiting: boolean
  validationErrors: IBackendErrors | null
}
