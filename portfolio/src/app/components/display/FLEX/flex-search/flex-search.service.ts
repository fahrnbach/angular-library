import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FlexSearchModel } from './flex-search.model';

@Injectable({
  providedIn: 'root'
})
export class FlexSearchService {
  // #region NOTES
//
 //
  // !Notes:
  // ^Simple by design. NO FILTERING LOGIC SHOULD GO HERE. ONLY RETURN an object with user input and filters!
  // ...
  // !Operation
  // Objects that want to get or update the value given by flex-search should subscribe to this service
  // ...
  // !Subscriptions
  // Subscribes to form.Valuechanges
  // ...
  // !Lifecycle
  // Unsubscribes to search form.Valuechanges onDestroy
  // ...
  // #INPUTS:
  // FROM flex-search Component (and others if they want, but seems unnecessary)
  // ...
  // #OUTPUTS:
  // TO components Component (searchValueSubject && searchValue$)
  // ...
  // TODO:
  // !Possibly make it so that only certain components can Modify the searchValues
  // !Race conditions? etc? may be unnecessary
  // ...
 //
//
//#endregion NOTES
  //&Buffer for previous values
  //&Could use these to post to some analytics data collection service etc
  private _previousSearchValuesLength: number = 5
  private _searchObjectSeed = {searchParam: 'INIT'}
  previousSearchValues: FlexSearchModel[] = Array(this._previousSearchValuesLength).fill(this._searchObjectSeed)
  currentSearchValue: FlexSearchModel = this._searchObjectSeed

  private _searchValueSubject = new Subject<FlexSearchModel>();
  searchValue$ = this._searchValueSubject.asObservable();

  constructor() { }

  subscribeToSearchValue(value: FlexSearchModel): void{
    this._searchValueSubject.next(value)
  }

  getCurrentSearchValue() {
    return this.currentSearchValue
  }

  getPreviousSearchValueAtIndex(index: number) {
    let clone = {...this.previousSearchValues[index]};
    return clone;
  }

  getPreviousSearchValues() {
    let clone = [...this.previousSearchValues];
    return clone;
  }

  updateSearchValue(value: FlexSearchModel) : boolean {
      this._addOneToPreviousSearchValues(value);
      this._searchValueSubject.next(value)
      this.currentSearchValue = value;
      console.log(this.previousSearchValues)
      return true
  }

// Keeps the previousSearchValues lean [length = (previousSearchValuesLength)]
  private _addOneToPreviousSearchValues(value: FlexSearchModel): boolean {
    try {
      this.previousSearchValues.push(value);
      this.previousSearchValues.shift();
      return true
    } catch (err: unknown) {
      return false
      // return err
    }
  }

}
