import { Component, input } from '@angular/core';

@Component({
    selector: 'app-zero-v1-flexcard',
    imports: [],
    templateUrl: './zero-v1-flexcard.component.html',
    styleUrl: './zero-v1-flexcard.component.css'
})
export class ZeroV1FlexcardComponent {
  title = input<string>()
}
