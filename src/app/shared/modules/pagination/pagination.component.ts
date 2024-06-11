import {Component, Input, OnInit, inject} from '@angular/core'
import {UtilsService} from '../../services/utils.service'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  utilsService = inject(UtilsService)

  @Input('total') totalProps: number
  @Input('limit') limitProps: number
  @Input('currentPage') currentPageProps: number
  @Input('url') urlProps: string

  pagesCount: number
  pages: number[]

  ngOnInit() {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps)
    this.pages = this.utilsService.range(1, this.pagesCount)
  }
}
