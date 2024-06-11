import {Injectable, inject} from '@angular/core'
import {Observable} from 'rxjs'
import {IFeedResponse} from '../types/feedResponse.interface'
import {environment} from '../../../../../environments/environment.development'
import {HttpClient} from '@angular/common/http'

@Injectable()
export class FeedService {
  http = inject(HttpClient)

  getFeed(url: string): Observable<IFeedResponse> {
    const fullUrl = environment.apiUrl + url

    return this.http.get<IFeedResponse>(fullUrl)
  }
}
