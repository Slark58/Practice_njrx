import {HttpClient} from '@angular/common/http'
import {Injectable, inject} from '@angular/core'
import {Observable, map} from 'rxjs'
import {IArticle} from '../../shared/types/acricle.interface'
import {IArticleInput} from '../../shared/types/articleInput.interface'
import {environment} from '../../../environments/environment.development'
import {ISaveArticleResponse} from '../../shared/types/saveArticleResponse.interface'

@Injectable()
export class EditArticleService {
  http: HttpClient = inject(HttpClient)

  updateArticle(
    slug: string,
    articlInput: IArticleInput
  ): Observable<IArticle> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`

    return this.http
      .put<ISaveArticleResponse>(fullUrl, articlInput)
      .pipe(map((res: ISaveArticleResponse) => res.article))
  }
}
