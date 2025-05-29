// #region IMPORTS
import { AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { GridComponent } from "../../../backgrounds/grid/grid-background.component";
import { BackArrowComponent } from "../../../navigation/back-arrow/back-arrow.component";
import { DatabaseService } from '../../../../Services/database.service';
import { ComponentModel } from '../../../../Models/component.model';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EditingModes } from './models/editingModes.model';
import { ZeroV1FlexviewDeleteComponent } from './delete/zero-v1-flexview-delete/zero-v1-flexview-delete.component';
// #endregion IMPORTS
// #region COMPONENT
@Component({
    selector: 'app-zero-v1-flexview',
    imports: [
      GridComponent,
      BackArrowComponent,
      ReactiveFormsModule,
      ZeroV1FlexviewDeleteComponent],
    templateUrl: './zero-v1-flexview.component.html',
    styleUrl: './zero-v1-flexview.component.css'
})
// #endregion
export class ZeroV1FlexviewComponent implements OnInit, OnDestroy, AfterViewChecked {
// #region NOTES
//
 //
  // !Notes:
  // #CHILD COMPONENT (flexview-delete) CALLS DatabaseService for DELETION
  // This Component uses a "modes" enum to differentiate between EditingModes.
  // The editing modes effect which "Type" of flexview you get.
  // Either modes.CREATE modes.READ modes.UPDATE or modes.DELETE
  //
  // ...
  // !Operation:
  // Query params are pulled from
  //
  //
  // ...
  // !Architecture
  // CHILDREN COMPONENTS SHOULD make calls to this component to update EditingMode State
  //
  // ...
  // !Services
  // Information shown in this component is pulled from the DatabaseService.
  //
  // ...
  // !Defaults:
  // mode = mode.READ
  //
  // ...
 //
//
// #endregion NOTES
// #region DEFINITIONS
  modes = EditingModes;
  mode: EditingModes = EditingModes.READ;

  name: string | null = 'name.x'
  private _paramsSubscription: Subscription = new Subscription();
  private _usersSubscription: Subscription = new Subscription();
  private _addComponentSubscription: Subscription = new Subscription

  componentDataObject: ComponentModel = {
    id: 'DONT_FILL',
    name: 'NewComponent!',
    photo_uri: 'example.example.example',
    description: 'GOODGOODGOODGOODGOD',
    info: 'GREATINFOREALLYLOTSOFGOODINFO',
    created_at: 'DONT_FILL',
    version: '1.1.1.1',
    price: 77.77,
    stock: 89
  }

  componentData = Object.keys(this.componentDataObject)

  queryParam: string | null = null;
  idParam?: string | undefined;
  modeParam?: string | undefined;

  // component: any[] = []

  myForm: FormGroup;

// AfterViewChecked is used to reduce FOUC
  wasChecked: boolean = false;
// AfterViewChecked is used to reduce FOUC
// #endregion DEFINITIONS
// #region CONSTRUCTOR

  constructor(private route: ActivatedRoute, private DatabaseService: DatabaseService) {
    this.myForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      photo_uri: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      info: new FormControl('', Validators.required),
      created_at: new FormControl('', Validators.required),
      version: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      stock: new FormControl('', Validators.required)
    });
  }
// #endregion
// #region FUNCTIONS
  onSubmit(): void {
    this.componentDataObject = {
      id: this.myForm.value.id,
      name: this.myForm.value.name,
      photo_uri: this.myForm.value.photo_uri,
      description: this.myForm.value.description,
      info: this.myForm.value.info,
      created_at: this.myForm.value.created_at,
      version: this.myForm.value.version,
      price: this.myForm.value.price,
      stock: this.myForm.value.stock
    }
    // this.fetchForEdit()
    console.log('Form submitted!', this.myForm.value);
    // !Hit database here with update!
    // then
    // this.fetchForEdit()
    this.saveChanges(this.myForm.value)
  }

  fetchForEdit(): void {
    // optimistic updating?

    // console.log(this.com)
    this.myForm.patchValue({
      id: this.componentDataObject.id,
      name: this.componentDataObject.name,
      photo_uri: this.componentDataObject.photo_uri,
      description: this.componentDataObject.description,
      info: this.componentDataObject.info,
      created_at: this.componentDataObject.created_at,
      version: this.componentDataObject.version,
      price: this.componentDataObject.price,
      stock: this.componentDataObject.stock
    });
    // console.log(this.componentDataObject)
  }

  enableMode(mode: any) {
    if(this.isValidEditingMode(mode)) {
      this.mode = mode
      console.log('mode updated: ' + this.modes[this.mode])
    } else {
      console.log('not a supported edit mode!')
    }
  }

  isValidEditingMode(mode: any): mode is EditingModes {
    if (Object.values(EditingModes).includes(mode)){
      return true
    } else
    return false
  }

  // wasComponentDeleted(didDelete: boolean) {
  //   if (didDelete) {
  //     this.enableMode(this.modes.READ)
  //   } else {
  //     console.log('cancelled')
  //   }
  // }
  // !upgrade to version that checks if deleted ABOVE
  wasComponentDeleted() {
      this.enableMode(this.modes.READ)
  }

  saveChanges(component: ComponentModel): void {
    if (this.mode == this.modes.CREATE) {
      console.log('sent to service')
      this._addComponentSubscription = this.DatabaseService.addComponent(component).subscribe()
    } else if(this.mode === this.modes.UPDATE) {
      // !api UPDATE http logic here (Service)
    }
    this.enableMode(this.modes.READ)
  }

// #endregion FUNCTIONS
// #region LIFECYCLE
ngOnInit() : void {
    this._paramsSubscription = this.route.queryParams.subscribe(params => {
      this.queryParam = params['query'];
      this.idParam = params['id'];
      this.modeParam = params['mode'];
      this.name = this.queryParam
      // console.log("QueryParam:" ,this.queryParam)
        }
      )
      // !If check to see if we are in create mode
      if (this.modeParam == 'CREATE') {
        this.enableMode(this.modes.CREATE)
        console.log(this.mode)
        console.log('creating')
        this.fetchForEdit();
      } else {
        this._usersSubscription = this.DatabaseService.getComponent(this.idParam).subscribe((data) => {
        // this.component = data
        this.componentDataObject = data;
        this.fetchForEdit();
      })
      }
  }

ngAfterViewChecked(): void {
    this.wasChecked = true
  }

ngOnDestroy(): void {
    this._paramsSubscription.unsubscribe();
    this._usersSubscription.unsubscribe();
    this._addComponentSubscription.unsubscribe()
  }
// #endregion LIFECYCLE
}
