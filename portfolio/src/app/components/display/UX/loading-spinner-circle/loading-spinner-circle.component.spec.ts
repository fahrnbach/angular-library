import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSpinnerCircleComponent } from './loading-spinner-circle.component';

describe('LoadingSpinnerCircleComponent', () => {
  let component: LoadingSpinnerCircleComponent;
  let fixture: ComponentFixture<LoadingSpinnerCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingSpinnerCircleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingSpinnerCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
