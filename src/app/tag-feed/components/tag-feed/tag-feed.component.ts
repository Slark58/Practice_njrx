import {Component, OnInit, inject} from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrls: ['./tag-feed.component.scss'],
})
export class TagFeedComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute)
  apiUrl: string
  tagName: string

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((parapms) => {
      this.tagName = parapms['slug']
      this.apiUrl = `/articles?tag=${this.tagName}`
    })
  }
}
