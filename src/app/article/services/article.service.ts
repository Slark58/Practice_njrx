import {HttpClient} from '@angular/common/http'
import {Injectable, inject} from '@angular/core'
import {Observable} from 'rxjs'
import {environment} from '../../../environments/environment.development'

@Injectable()
export class ArticleService {
  http: HttpClient = inject(HttpClient)

  deleteArticle(slug: string): Observable<{}> {
    const url = `${environment.apiUrl}/article/${slug}`

    return this.http.delete<{}>(url)
  }
}
