import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core'
import {IArticleInput} from '../../../../types/articleInput.interface'
import {IBackendErrors} from '../../../../types/backendErrors.interface'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
  fb = inject(FormBuilder)

  @Input('initValues') initValuesProps: IArticleInput
  @Input('isSubmitting') isSubmittingProps: boolean
  @Input('errors') errorsProps: IBackendErrors | null

  @Output('articleSubmit')
  articleSubmitEvent = new EventEmitter<IArticleInput>()

  form: FormGroup

  ngOnInit(): void {
    this.initForm()
  }

  initForm(): void {
    this.form = this.fb.group({
      title: this.initValuesProps.title,
      description: this.initValuesProps.description,
      body: this.initValuesProps.body,
      tagList: this.initValuesProps.tagList.join(' '),
    })
  }

  onSubmit(): void {
    console.log(this.form.value)

    this.articleSubmitEvent.emit(this.form.value)
  }
}
