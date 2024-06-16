import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable, map} from 'rxjs'
import {IProfile} from '../../shared/types/profile.interface'
import {environment} from '../../../environments/environment.development'
import {IGetUserProfile} from '../types/getUserProfileResponse.interface'

@Injectable()
export class UserProfileService {
  constructor(private http: HttpClient) {}

  getUserProfile(slug: string): Observable<IProfile> {
    const url = `${environment.apiUrl}/profiles/${slug}`

    return this.http.get(url).pipe(map((res: IGetUserProfile) => res.profile))
  }
}
