import {Component, Input, OnInit} from '@angular/core'
import {IBackendErrors} from '../../types/backendErrors.interface'

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorProps: IBackendErrors

  errorMessages: string[]

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.backendErrorProps).map(
      (name: string) => {
        const message = this.backendErrorProps[name].join(', ')
        return `${name} ${message}`
      }
    )
  }
}
