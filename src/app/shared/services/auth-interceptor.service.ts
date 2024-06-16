import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import {Injectable, inject} from '@angular/core'
import {Observable} from 'rxjs'
import {PersistenceService} from './persistence.service'

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  persistenceService: PersistenceService = inject(PersistenceService)

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.persistenceService.get('accessToken')

    console.log('intercepter = ', token)

    if (token) {
      const newReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      })
      return next.handle(newReq)
    }

    return next.handle(req)
  }
}
