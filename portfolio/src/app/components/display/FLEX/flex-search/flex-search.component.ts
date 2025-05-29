import { Component, Input, output, OutputEmitterRef } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, Observable, ObservableInput, Subject, takeUntil, tap } from 'rxjs';
import { FlexSearchService } from './flex-search.service';
import { FlexSearchModel } from './flex-search.model';

@Component({
  selector: 'app-flex-search',
  imports: [ReactiveFormsModule],
  templateUrl: './flex-search.component.html',
  styleUrl: './flex-search.component.css'
})
export class FlexSearchComponent {
// #region NOTES
//
 //
  // !Notes:
  // #Flex-Search.service will be used to interface with this component. SIMPLE.
  // ^DO NOT CHANGE THIS COMPONENT. CHANGES SHOULD NOT BE MADE TO THIS COMPONENT
  // ^TO UPDATE FUNCTIONALITY UPDATE THE FLEX.SEARCH.SERVICE.
  // ^SEE NOTES

  // Simple by design. No filtering logic should go here. ONLY RETURN an object with user input!
  // ...
  // !Operation
  //  Import this component and then subscribe to the flex-search.Service.
  // ...
  // !Subscriptions
  // Subscribes to form.Valuechanges
  // ...
  // !Lifecycle
  // Unsubscribes to search form.Valuechanges onDestroy
  // ...
  // #INPUTS:
  // User input in search box
  // ...
  // #OUTPUTS:
  // ...
  // TODO:
  // !! ADD FORM VALIDATION and SANITIZATION!
  // Possibly unsubscribe to form.Valuechanges?
  // ...
 //
//
//#endregion NOTES
// !------------ Don't Change below unless you really need to. Prefer to change FLEX-SEARCH.SERVICE
  // sharedSearchValue: string = 'Search...'

  // valueChangesSubscription: Observable<any> = new Observable


  // ^DO NOT CHANGE THIS COMPONENT. CHANGES SHOULD NOT BE MADE TO THIS COMPONENT
  // ^TO UPDATE FUNCTIONALITY UPDATE THE FLEX.SEARCH.SERVICE.
  // ^SEE NOTES
  private _formSaved$ = new Subject<boolean>;
  searchForm: FormGroup;
  searchObject: FlexSearchModel = {searchParam: 'Search'}

  constructor(private outputService: FlexSearchService){
    this.searchForm = new FormGroup({
      searchParam: new FormControl('')
    })
    this.SearchFormInit()
  }
  // ^DO NOT CHANGE THIS COMPONENT. CHANGES SHOULD NOT BE MADE TO THIS COMPONENT
  // ^TO UPDATE FUNCTIONALITY UPDATE THE FLEX.SEARCH.SERVICE.
  // ^SEE NOTES
  SearchFormInit() {
    this.searchForm.valueChanges.pipe(
      takeUntil(this._formSaved$),
      debounceTime(500),
      distinctUntilChanged(),
      // tap((value) => console.log('input changed:', value))
      // distinctUntilChanged(compareValuesFunction(prev, curr))
    ).subscribe({
      next: value => {
        // &Below FX can be swapped out as needed. v v v
        // &Outputs the Search value every [debounceTime] seconds
        this.OutputSearchValueToService(value)
      }
    })
  }

  // ^DO NOT CHANGE THIS COMPONENT. CHANGES SHOULD NOT BE MADE TO THIS COMPONENT
  // ^TO UPDATE FUNCTIONALITY UPDATE THE FLEX.SEARCH.SERVICE.
  // ^SEE NOTES

  onSubmit(): void{
    // this.searchObject = {
    //   searchParam: this.searchForm.value.searchParam
    // }
  }
  // ^DO NOT CHANGE THIS COMPONENT. CHANGES SHOULD NOT BE MADE TO THIS COMPONENT
  // ^TO UPDATE FUNCTIONALITY UPDATE THE FLEX.SEARCH.SERVICE.
  // ^SEE NOTES
  onDestroy() {
    // ! Unsubscribe from searchFormInit?
    this._formSaved$.next(true);
    this._formSaved$.unsubscribe()
  }


  // !------------ Don't Change above unless you really need to. Prefer to change FLEX-SEARCH.SERVICE

  OutputSearchValueToService(value: FlexSearchModel) {
    this.outputService.updateSearchValue(value)
  }
}
