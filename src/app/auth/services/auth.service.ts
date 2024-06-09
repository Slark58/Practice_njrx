import {Injectable} from '@angular/core'
import {IRegisterRequest} from '../types/registerRequest.interface'
import {Observable, map} from 'rxjs'
import {ICurrentUser} from '../../shared/types/currentUser.interface'
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment.development'
import {IAuthResponse} from '../types/authResponse.interface'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: IRegisterRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users'
    return this.http
      .post<IAuthResponse>(url, data)
      .pipe(map((res: IAuthResponse) => res.user))
  }
}
