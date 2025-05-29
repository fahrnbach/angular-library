import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexSearchFilterComponent } from './flex-search-filter.component';

describe('FlexSearchFilterComponent', () => {
  let component: FlexSearchFilterComponent;
  let fixture: ComponentFixture<FlexSearchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexSearchFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
