import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ZeroV1FlexcardComponent } from "../../components/display/FLEX/flexcards/zero-v1-flexcard/zero-v1-flexcard.component";
import { GridComponent } from '../../components/backgrounds/grid/grid-background.component';
import { Router } from '@angular/router';
import { DatabaseService } from '../../Services/database.service';
import { filter, Subscription } from 'rxjs';
import { FlexSearchComponent } from "../../components/display/FLEX/flex-search/flex-search.component";
import { FlexSearchFilterComponent } from "../../components/display/FLEX/flex-search-filter/flex-search-filter.component";
import { FlexSearchService } from '../../components/display/FLEX/flex-search/flex-search.service';
import { FlexSearchModel } from '../../components/display/FLEX/flex-search/flex-search.model';
import { LoadingSpinnerCircleComponent } from '../../components/display/UX/loading-spinner-circle/loading-spinner-circle.component';
import { ComponentModel } from '../../Models/component.model';
@Component({
    selector: 'app-components',
    imports: [
    ZeroV1FlexcardComponent,
    GridComponent,
    FlexSearchComponent,
    FlexSearchFilterComponent,
    LoadingSpinnerCircleComponent
],
    templateUrl: './components.component.html',
    styleUrl: './components.component.css'
})
export class ComponentsComponent implements OnInit, OnChanges, OnDestroy {
  private _componentsListSubscription: Subscription = new Subscription
  private _flexSearchValueSubscription: Subscription = new Subscription


  STATE: {
    isloading: boolean;
    isfiltering: boolean;
  } = {
    isloading: false,
    isfiltering: false
  };

  filterValue: string = ''
  filterObject: FlexSearchModel = {searchParam: ''}

  componentsList: ComponentModel[] = []
  componentsListKeys = Object.keys(this.componentsList)

  filteredComponentsList: any = ''
  filteredComponentsListKeys = Object.keys(this.filteredComponentsList)
  // implement filtering logic Needs a check isFiltering

  // test: FlexSearchModel = {searchParam: 'INIT'}
  // test: string = ''

  constructor(
    private router: Router,
    private DatabaseService: DatabaseService,
    private inputSearchValueService: FlexSearchService
  ) {}
  // #region NOTES
//
 //
  // !Notes:
  // Should get Components from DatabaseService
  // Should display Components as Cards(flex-cards) for each component.
  // Should paginate results
  // When clicked flex-cards should open (flex-views)
  // ...
  // !Operation
  // This Component will reach out to the DatabaseService to get flex-cards
  //
  // If deleted, the component will navigate the user back to the previous page.
  // If cancelled, the component will inform the PARENT COMPONENT to close this modal
  //
  // ...
  // !Subscriptions
  // Subscribes to the databaseService for the components list
  // ...
  // !Lifecycle
  // Unsubscribe to the database subscription on destroy
  // ...
  // #INPUTS:
  // ComponentIDInput from PARENT COMPONENT
  // -- Subscription to componentsList from DatabaseService
  //
  // ...
  // #OUTPUTS:
  // NONE
  // --
  // ...
  // TODO:
  // ...
 //
//
//#endregion NOTES

  openComponentModule (url: string, id: string) {
    scrollTo(0,0)
    this.router.navigate(['/components/view'], {
      queryParams: {query: url, id: id}
    });
  }

  refreshComponents() {
    this._componentsListSubscription = this.DatabaseService.getComponents().subscribe((data) => {
      this.componentsList = data
      // console.log(Object.keys([...this.componentsList]))
    })
  }

  // filterComponents



  ngOnInit(): void {

    this.refreshComponents();
    this.refreshAndFilterComponents();
  }
// Subscribes to Flex-Search Service to get user defined Search (Filter) Options
// Searches DB for those parameters
// Updates filteredComponents to match
//
  refreshAndFilterComponents() {
    this._flexSearchValueSubscription = this.inputSearchValueService.searchValue$.subscribe(filterObject => {
      this.filterValue = filterObject.searchParam;
      this.filterObject = filterObject

      if (this.filterValue == '') {
        this.STATE.isfiltering = false
      } else {
        this.STATE.isfiltering = true
        this.refreshComponents();
              // !quick and dirty REFACTOR WITH EXPLICIT FUNCTION INPUT
        this.filterLocally()
        // this.filterStrict()
        // Could add logic to search in the database here
      }
    })
  }

  // filterLocallyStrict() {
  //   let tempComponentsList = [...this.componentsList]
  //   let tempComponentsArr: ComponentModel[] = []
  //   tempComponentsList.forEach(object => {
  //     if (object.name == this.filterValue) {
  //       tempComponentsArr.push(object)
  //     }
  //     if (object.id == this.filterValue) {
  //       tempComponentsArr.push(object)
  //     }
  //   })
  //   console.log(tempComponentsArr)
  //   this.filteredComponentsList = tempComponentsArr
  // }
  // !Pulls FilterValue In without being called explicity
  filterLocally() {
    let tempComponentsList = [...this.componentsList]
    let tempComponentsArr: ComponentModel[] = []
    const regex = this.createNaiveFuzzyRegex(this.filterValue)
    tempComponentsList.forEach(object => {
      let didMatchName = object.name.match(regex)
      let didMatchDesc = object.description.match(regex)
      let didMatchInfo = object.info.match(regex)
      // let didMatchTags = object.description.match(regex)
      console.log(object)
      if (didMatchName || didMatchDesc || didMatchInfo ) {
        tempComponentsArr.push(object)
      }
    })
    console.log(tempComponentsArr)
    this.filteredComponentsList = tempComponentsArr
  }

  createNaiveFuzzyRegex(input: string) {
    // Escape special regex characters
    const escapedInput = input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    console.log(escapedInput)
    // Insert '.*' between each character for fuzzy matching
    return new RegExp(escapedInput.split('').join('.*'), 'i');
  }

  ngOnChanges(): void {
    this.refreshComponents();
  }

  ngOnDestroy(): void {
    this._componentsListSubscription.unsubscribe();
    this._flexSearchValueSubscription.unsubscribe();
  }
}
