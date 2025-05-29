import { Component, input, InputSignal, OnDestroy, Output, output, OutputEmitterRef, signal, Signal } from '@angular/core';
import { DatabaseService } from '../../../../../../Services/database.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-zero-v1-flexview-delete',
  imports: [],
  templateUrl: './zero-v1-flexview-delete.component.html',
  styleUrl: './zero-v1-flexview-delete.component.css'
})
export class ZeroV1FlexviewDeleteComponent implements OnDestroy {
  // /gets id from parent component
  ComponentIDInput: InputSignal<string | undefined> = input()
  // /outputs cancel signal to parent
  ShouldCancelOutputSignal: OutputEmitterRef<boolean> = output<boolean>();

  private _deleteComponentSubscription:Subscription = new Subscription

  constructor(private location: Location, private router: Router, private databaseService: DatabaseService) {}
// #region NOTES
//
 //
  // !Notes:
  // This component Has two main functions:
  // 1. To Delete The Component Listing, OR
  // 2. To Cancel
  // ...
  // !Operation
  // This Component will reach out to the DatabaseService to perform deletion if the component should be deleted
  // shouldDeleteComponent will always tell the PARENT COMPONENT what the user chose. Delete OR Cancel
  // If deleted, the component will navigate the user back to the previous page.
  // If cancelled, the component will inform the PARENT COMPONENT to close this modal
  //
  // ...
  // !Subscriptions
  // Subscribes to the databaseService for the deletion function
  // ...
  // !Lifecycle
  // Unsubscribe to the database subscription on destroy
  // ...
  // #INPUTS:
  // ComponentIDInput from PARENT COMPONENT
  // -- ID for DatabaseService to delete
  //
  // ...
  // #OUTPUTS:
  // ShouldCancelOutputSignal for PARENT COMPONENT
  // -- Tell PARENT if should cancel (Close modal), or
  //
  // ...
  // TODO:
  // Add HTTP Confirmation logic
  // RESEARCH if unsubscribing in OnDestroy is necessary
  // !UNSUBSCRIBING in ngOnDestroy causes a bug where the HTTP request will cancel before it is made
  // !Another bug : sometimes the views are still available in the components page after being deleted!
 //
//
//#endregion NOTES

  shouldDeleteComponent(shouldDelete: boolean) {
    if (shouldDelete) {
      this.ShouldCancelOutputSignal.emit(true)
      this.deleteComponent(this.ComponentIDInput())
      console.log('deleting...')
    } else if (!shouldDelete) {
      this.ShouldCancelOutputSignal.emit(false)
      console.log('cancelling...')
    }
  }

  deleteComponent(id?: string ) {
    if (id) {
      console.log('deleting component... ' + id)
      this.navigateBack()
      // alert('Deleted')
      this._deleteComponentSubscription = this.databaseService.deleteComponent(id).subscribe()
    } else {
      console.log('Id not provided by parent component')
    }
  }


  navigateBack(): void {
    if (window.history.length > 2) {
      this.location.back();
    } else {
      this.router.navigate(['/components'])
    }
  }

  ngOnDestroy(): void {
    // !UNSUBSCRIBING here causes a bug where the HTTPrequest will cancel before it is made
    // this._deleteComponentSubscription.unsubscribe();
  }
}
