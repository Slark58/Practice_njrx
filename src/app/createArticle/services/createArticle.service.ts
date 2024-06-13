import {HttpClient} from '@angular/common/http'
import {Injectable, inject} from '@angular/core'
import {Observable, map} from 'rxjs'
import {IArticle} from '../../shared/types/acricle.interface'
import {IArticleInput} from '../../shared/types/articleInput.interface'
import {environment} from '../../../environments/environment.development'
import {ISaveArticleResponse} from '../../shared/types/saveArticleResponse.interface'

@Injectable()
export class CreateArticleService {
  http: HttpClient = inject(HttpClient)

  creteArticle(articlInput: IArticleInput): Observable<IArticle> {
    const fullUrl = environment.apiUrl + '/articles'

    return this.http
      .post<ISaveArticleResponse>(fullUrl, articlInput)
      .pipe(map((res: ISaveArticleResponse) => res.article))
  }
}
