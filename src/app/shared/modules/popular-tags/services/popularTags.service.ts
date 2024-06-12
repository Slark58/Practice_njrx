import {Injectable, inject} from '@angular/core'
import {Observable, map} from 'rxjs'
import {TPopularTag} from '../../../types/popularTag.type'
import {environment} from '../../../../../environments/environment.development'
import {HttpClient} from '@angular/common/http'
import {IGetPopularTagsResponse} from '../types/getPopularTagsRes.interface'

@Injectable()
export class PopularTagsService {
  private http = inject(HttpClient)

  getPopularTags(): Observable<TPopularTag[]> {
    const url = environment.apiUrl + '/tags'

    return this.http.get(url).pipe(
      map((res: IGetPopularTagsResponse) => {
        return res.tags
      })
    )
  }
}
