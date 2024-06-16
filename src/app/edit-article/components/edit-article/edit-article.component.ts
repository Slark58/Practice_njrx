import {Component, OnInit, inject} from '@angular/core'
import {IArticleInput} from '../../../shared/types/articleInput.interface'
import {Observable, filter, map} from 'rxjs'
import {IBackendErrors} from '../../../shared/types/backendErrors.interface'
import {Store, select} from '@ngrx/store'
import {
  articleSelector,
  isSubmitingSelector,
  validationErrorsSelector,
} from '../../store/selectors'
import {ActivatedRoute} from '@angular/router'
import {getArticleAction} from '../../store/actions/getArticle.action'
import {IArticle} from '../../../shared/types/acricle.interface'
import {updateArticleAction} from '../../store/actions/updateArticle.action'

@Component({
  selector: 'app-create-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
  store = inject(Store)
  activatedRoute = inject(ActivatedRoute)

  // initFormValues: IArticleInput = {
  //   title: '',
  //   description: '',
  //   body: '',
  //   tagList: [],
  // }
  initFormValues$: Observable<IArticleInput>
  isLoading$: Observable<boolean>
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<IBackendErrors | null>
  slug: string

  onSubmit(articleInput: IArticleInput) {
    this.store.dispatch(updateArticleAction({articleInput, slug: this.slug}))
  }

  ngOnInit() {
    this.initValues()
    this.fetchDate()
  }

  initValues() {
    this.slug = this.activatedRoute.snapshot.paramMap.get('slug')
    this.isSubmitting$ = this.store.pipe(select(isSubmitingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    this.initFormValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: IArticle) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList,
        }
      })
    )
  }

  fetchDate() {
    this.store.dispatch(getArticleAction({slug: this.slug}))
  }
}
