import {Injectable, inject} from '@angular/core'
import {Observable, map} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {environment} from '../../../environments/environment.development'
import {IArticleResponse} from '../types/articleResponse.interface'
import {IArticle} from '../types/acricle.interface'

@Injectable()
export class ArticleService {
  http = inject(HttpClient)

  getArticle(slug: string): Observable<IArticle> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`

    return this.http.get<IArticleResponse>(fullUrl).pipe(
      map((res: IArticleResponse) => {
        return res.article
      })
    )
  }
}
