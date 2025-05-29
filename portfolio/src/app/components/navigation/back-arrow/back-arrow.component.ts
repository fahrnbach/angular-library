import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-back-arrow',
    imports: [],
    templateUrl: './back-arrow.component.html',
    styleUrl: './back-arrow.component.css'
})
export class BackArrowComponent {
  constructor(private location: Location, private router: Router) {}
  navigateBack(): void {
    if (window.history.length > 2) {
      this.location.back();
    } else {
      this.router.navigate(['/components'])
    }
  }
}
