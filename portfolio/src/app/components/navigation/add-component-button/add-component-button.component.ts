import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-component-button',
  imports: [],
  templateUrl: './add-component-button.component.html',
  styleUrl: './add-component-button.component.css'
})
export class AddComponentButtonComponent {
  // ShouldEditOutputSignal: OutputEmitterRef<boolean> = output<boolean>();

  constructor(private router: Router) {}
// #region NOTES
//
 //
  // !Notes:
  // A Search Filter
  // ...
  // !Operation
  //
  // ...
  // !Subscriptions
  //
  // ...
  // !Lifecycle
  //
  // ...
  // #INPUTS:
  //
  // ...
  // #OUTPUTS:
  // shouldEdit Output - TO  PARENT COMPONENT (Flexview)
  //
  // ...
  // TODO:
  // Add Search Logic
  //
  //
  //
 //
//
//#endregion NOTES

  beginAddComponent() {
    // scrollTo(0,0)
    // this.ShouldEditOutputSignal.emit(true)
    this.router.navigate(['/components/view/new'], {queryParams: {mode: 'CREATE'}});
  }
}
