import {Component, Input, OnInit} from '@angular/core'
import {TPopularTag} from '../../types/popularTag.type'

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
})
export class TagListComponent implements OnInit {
  @Input('tags') tagsProps: TPopularTag[]

  constructor() {}

  ngOnInit() {}
}
