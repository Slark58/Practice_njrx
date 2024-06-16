import {Injectable} from '@angular/core'
import {Observable, map} from 'rxjs'
import {IArticle} from '../../../types/acricle.interface'
import {environment} from '../../../../../environments/environment.development'
import {HttpClient} from '@angular/common/http'
import {IArticleResponse} from '../../../types/articleResponse.interface'

@Injectable()
export class AddToFavoritesService {
  constructor(private http: HttpClient) {}

  addToFavorites(slug: string): Observable<IArticle> {
    const url = this.getUrl(slug)
    return this.http.post(url, {}).pipe(map(this.getArticle))
  }

  removeFromFavorites(slug: string): Observable<IArticle> {
    const url = this.getUrl(slug)
    return this.http.delete(url).pipe(map(this.getArticle))
  }

  getUrl(slug: string): string {
    return `${environment.apiUrl}/articles/${slug}/favorite`
  }

  getArticle(res: IArticleResponse): IArticle {
    return res.article
  }
}
