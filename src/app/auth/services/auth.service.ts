import {Injectable} from '@angular/core'
import {IRegisterRequest} from '../types/registerRequest.interface'
import {Observable, map} from 'rxjs'
import {ICurrentUser} from '../../shared/types/currentUser.interface'
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment.development'
import {IAuthResponse} from '../types/authResponse.interface'
import {ILoginRequest} from '../types/loginRequest.interface'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(res: IAuthResponse): ICurrentUser {
    return res.user
  }

  register(data: IRegisterRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users'
    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser))
  }

  login(data: ILoginRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users/login'
    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser))
  }

  checkAuth(): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/user'
    return this.http.get<IAuthResponse>(url).pipe(map(this.getUser))
  }
}
