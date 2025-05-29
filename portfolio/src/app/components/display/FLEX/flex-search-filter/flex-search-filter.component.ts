import { Component } from '@angular/core';
import { FlexSearchComponent } from '../flex-search/flex-search.component';
import { DatabaseService } from '../../../../Services/database.service';
import { Router } from '@angular/router';
import { AddComponentButtonComponent } from '../../../navigation/add-component-button/add-component-button.component';

@Component({
  selector: 'app-flex-search-filter',
  imports: [FlexSearchComponent, AddComponentButtonComponent],
  templateUrl: './flex-search-filter.component.html',
  styleUrl: './flex-search-filter.component.css'
})
export class FlexSearchFilterComponent {

}
