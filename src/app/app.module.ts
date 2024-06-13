import {NgModule, isDevMode} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {AuthModule} from './auth/auth.module'
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import {EffectsModule} from '@ngrx/effects'
import {TopBarModule} from './shared/modules/top-bar/top-bar.module'
import {HTTP_INTERCEPTORS} from '@angular/common/http'
import {AuthInterceptorService} from './shared/services/auth-interceptor.service'
import {GlobalFeedModule} from './global-feed/global-feed.module'
import {StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store'
import {YourFeedModule} from './your-feed/your-feed.module'
import {TagFeedModule} from './tag-feed/tag-feed.module'
import {ArticleModule} from './article/article.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YourFeedModule,
    TagFeedModule,
    AuthModule,
    ArticleModule,
    TopBarModule,
    GlobalFeedModule,
    StoreModule.forRoot({
      router: routerReducer,
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: true,
    }),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
