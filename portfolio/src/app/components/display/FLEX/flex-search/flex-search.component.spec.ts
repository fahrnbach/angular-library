import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexSearchComponent } from './flex-search.component';

describe('FlexSearchComponent', () => {
  let component: FlexSearchComponent;
  let fixture: ComponentFixture<FlexSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
