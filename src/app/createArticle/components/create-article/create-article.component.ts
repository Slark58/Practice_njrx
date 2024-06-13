import {Component, OnInit, inject} from '@angular/core'
import {IArticleInput} from '../../../shared/types/articleInput.interface'
import {Observable} from 'rxjs'
import {IBackendErrors} from '../../../shared/types/backendErrors.interface'
import {Store, select} from '@ngrx/store'
import {
  isSubmitingSelector,
  validationErrorsSelector,
} from '../../store/selectors'
import {createArticleAction} from '../../store/actions/createArticle.action'

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent implements OnInit {
  store = inject(Store)

  initValues: IArticleInput = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  }

  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<IBackendErrors | null>

  onSubmit(articleInput: IArticleInput) {
    console.log(articleInput)

    this.store.dispatch(createArticleAction({articleInput}))
  }

  ngOnInit() {
    this.isSubmitting$ = this.store.pipe(select(isSubmitingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }
}
